$port = 8080
$dir = (Get-Location).Path
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")

try {
    $listener.Start()
} catch {
    Write-Host "Failed to start listener on port 8080. Attempting port 8081..."
    $port = 8081
    $listener.Prefixes.Clear()
    $listener.Prefixes.Add("http://localhost:$port/")
    $listener.Start()
}

Write-Host "Server started globally on http://localhost:$port"

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $path = $request.Url.LocalPath
        if ($path -eq "/") { $path = "/index.html" }
        
        $localPath = Join-Path $dir $path.Replace("/", "\")
        $localPath = [System.Uri]::UnescapeDataString($localPath)
        
        if (Test-Path $localPath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($localPath).ToLower()
            $contentType = "application/octet-stream"
            
            switch ($ext) {
                ".html" { $contentType = "text/html" }
                ".css" { $contentType = "text/css" }
                ".js" { $contentType = "application/javascript" }
                ".json" { $contentType = "application/json" }
                ".png" { $contentType = "image/png" }
                ".glb" { $contentType = "model/gltf-binary" }
                ".gltf" { $contentType = "model/gltf+json" }
            }
            
            $response.ContentType = $contentType
            $content = [System.IO.File]::ReadAllBytes($localPath)
            $response.ContentLength64 = $content.Length
            $response.OutputStream.Write($content, 0, $content.Length)
        } else {
            $response.StatusCode = 404
        }
        $response.Close()
    }
} catch {
    Write-Host "Server stopped."
} finally {
    $listener.Stop()
}
