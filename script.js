// Dummy Data Structure reflecting the research strategy
const researchData = {
    single: {
        title: "싱글뷰 이미지 기반",
        workflow: {
            subtitle: "",
            steps: ["1. 이미지 생성", "2. 이미지 기반 3D 모델 생성"],
            methodDescription: "단일 시점 렌더링 스케치 기반 Image-to-3D 생성. 측·후면 조형 정보가 입력 이미지에 내재되어 있지 않아, 3D 생성기가 독립적으로 비가시 영역을 추론 및 생성하는 방식입니다.",
            evaluationPoint: "측·후면 정보가 부족할 때 3D 생성 결과에서 나타나는 형태 생략이나 구조적 한계를 비교군으로서 확인해 주세요."
        },
        subModels: [
            {
                id: "suv",
                name: "SUV (기본형)",
                modelSrc: "assets/싱글뷰 suv.glb",
                images: ["assets/싱글뷰 이미지.jpg"],
                cameraOrbits: ["30deg 75deg auto"],
                prompt: "A realistic conceptual sketch of a modern SUV, sleek aerodynamic design, silver gradient color, dramatic studio lighting, single front-side view.",
                models: "<strong style='color:#60a5fa;'>[싱글뷰 이미지 생성]</strong>\n- Base: Flux.1 Dev\n- 생성 방식: 싱글 이미지 스케치\n\n<strong style='color:#f472b6;'>[3D 모델 생성]</strong>\n- 3D Model: 훈유안 3D 3.0 모델",
                info: { model: "Hunyuan 3.0", method: "싱글뷰 이미지", views: "프론트 쿼터뷰" }
            },
            {
                id: "pickup",
                name: "Pick-up Truck (픽업트럭)",
                modelSrc: "assets/싱글뷰 pick up.glb",
                images: ["assets/싱글뷰 이미지 2.png"],
                cameraOrbits: ["30deg 75deg auto"],
                prompt: "A realistic conceptual sketch of a rugged heavy-duty modern pick-up truck, industrial off-road design, strong structural consistency, single front-side view.",
                models: "<strong style='color:#60a5fa;'>[싱글뷰 이미지 생성]</strong>\n- Base: Flux.1 Dev\n- 생성 방식: 싱글 이미지 스케치\n\n<strong style='color:#f472b6;'>[3D 모델 생성]</strong>\n- 3D Model: 훈유안 3D 3.0 모델",
                info: { model: "Hunyuan 3.0", method: "싱글뷰 이미지", views: "프론트 쿼터뷰" }
            },
            {
                id: "sedan",
                name: "Sedan (세단)",
                modelSrc: "assets/싱글뷰 sedan.glb",
                images: ["assets/싱글뷰 3.png"],
                cameraOrbits: ["30deg 75deg auto"],
                prompt: "A realistic conceptual sketch of a modern elegant sedan, sleek aerodynamic design, silver gradient color, dramatic studio lighting, single front-side view.",
                models: "<strong style='color:#60a5fa;'>[싱글뷰 이미지 생성]</strong>\n- Base: Flux.1 Dev\n- 생성 방식: 싱글 이미지 스케치\n\n<strong style='color:#f472b6;'>[3D 모델 생성]</strong>\n- 3D Model: 훈유안 3D 3.0 모델",
                info: { model: "Hunyuan 3.0", method: "싱글뷰 이미지", views: "프론트 쿼터뷰" }
            }
        ]
    },
    multi: {
        title: "멀티뷰 기반",
        workflow: {
            subtitle: "멀티뷰 이미지 기반 시점 일관성 강화 전략",
            steps: ["1. 차량 멀티뷰 이미지 생성(프롬프트+ 학습모델 적용)", "2. 이미지 기반 3D 모델 생성"],
            methodDescription: "ControlNet 및 LoRA 기반 다중 시점(Multi-View) 단일 이미지 생성 후 3D 생성. 전·측·후면 레이아웃이 정렬된 멀티뷰를 입력하여, 단일 뷰에서 누락되는 핵심 디자인 정보(특히 후면 조형)를 명시적으로 설계하고 통제하는 방식입니다.",
            evaluationPoint: "입력 이미지의 후면 조형 정보가 3D에 어떻게 연동되었는지, 뷰(View) 간 시점 일관성을 중심으로 평가해 주세요."
        },
        subModels: [
            {
                id: "suv",
                name: "SUV (기본형)",
                modelSrc: "assets/멀티뷰 1.glb",
                images: ["assets/멀티뷰 이미지 (1).jpg", "assets/멀티뷰 이미지 (2).jpg", "assets/멀티뷰 이미지 (3).jpg"],
                cameraOrbits: ["30deg 75deg auto", "90deg 75deg auto", "150deg 75deg auto"],
                prompt: "A realistic conceptual sketch of a modern SUV, separated into 3 orthographic views: precise front view, precise side view, explicit rear view. High structural consistency, architectural blueprint style.",
                models: "<strong style='color:#60a5fa;'>[멀티뷰 이미지 생성]</strong>\n- Base: Flux.1 Dev\n- LoRA: 자체 학습 멀티뷰 LoRA\n- 생성 방식: 멀티뷰 단일 이미지 크롭 방식\n\n<strong style='color:#f472b6;'>[3D 모델 생성]</strong>\n- 3D Model: 훈유안 3D 3.0 모델",
                info: { model: "Hunyuan 3.0", method: "멀티뷰 이미지", views: "프론트 쿼터, 사이드, 백쿼터뷰" }
            },
            {
                id: "pickup",
                name: "Pick-up Truck (픽업트럭)",
                modelSrc: "assets/멀티뷰 2.glb",
                images: ["assets/멀티뷰 이미지2 (1).png", "assets/멀티뷰 이미지2 (2).png", "assets/멀티뷰 이미지2 (3).png"],
                cameraOrbits: ["30deg 75deg auto", "90deg 75deg auto", "150deg 75deg auto"],
                prompt: "A realistic conceptual sketch of a rugged heavy-duty modern pick-up truck, separated into 3 orthographic views: precise front view, precise side view, explicit rear view. Industrial off-road design, strong structural consistency, blueprint style rendering.",
                models: "<strong style='color:#60a5fa;'>[멀티뷰 이미지 생성]</strong>\n- Base: Flux.1 Dev\n- LoRA: 자체 학습 멀티뷰 LoRA\n- 생성 방식: 멀티뷰 단일 이미지 크롭 방식\n\n<strong style='color:#f472b6;'>[3D 모델 생성]</strong>\n- 3D Model: 훈유안 3D 3.0 모델",
                info: { model: "Hunyuan 3.0", method: "멀티뷰 이미지", views: "프론트 쿼터, 사이드, 백쿼터뷰" }
            },
            {
                id: "sedan",
                name: "Sedan (세단)",
                modelSrc: "assets/멀티뷰 3.glb",
                images: ["assets/멀티뷰 세단 1 (1).png", "assets/멀티뷰 세단 1 (2).png", "assets/멀티뷰 세단 1 (3).png"],
                cameraOrbits: ["30deg 75deg auto", "90deg 75deg auto", "150deg 75deg auto"],
                prompt: "A realistic conceptual sketch of a modern elegant sedan, separated into 3 orthographic views: precise front view, precise side view, explicit rear view. High structural consistency, architectural blueprint style.",
                models: "<strong style='color:#60a5fa;'>[멀티뷰 이미지 생성]</strong>\n- Base: Flux.1 Dev\n- LoRA: 자체 학습 멀티뷰 LoRA\n- 생성 방식: 멀티뷰 단일 이미지 크롭 방식\n\n<strong style='color:#f472b6;'>[3D 모델 생성]</strong>\n- 3D Model: 훈유안 3D 3.0 모델",
                info: { model: "Hunyuan 3.0", method: "멀티뷰 이미지", views: "프론트 쿼터, 사이드, 백쿼터뷰" }
            }
        ]
    },
    parts: {
        title: "파츠 단위 변형",
        workflow: {
            subtitle: "파츠 단위 차량 이미지 변형 및 수정 전략",
            steps: ["1. 단일 이미지 생성", "2. 인페인팅 (디자인 수정 및 변형)", "3. 이미지 기반 3D 모델 생성"],
            methodDescription: "파츠별 특화 LoRA와 인페인팅(Inpainting)을 결합한 국소 변형 3D 생성. 차선의 기본 비례와 실루엣은 통제값으로 유지하면서 특정 부위(그릴, 휠 등)의 디자인 스타일만 변경하는 수평 전개 방식입니다.",
            evaluationPoint: "원본 차체의 비례와 정체성이 훼손되지 않고 유지되는지, 타겟 파츠의 디자인 변화만 3D에 성공적으로 동기화되었는지 확인해 주세요."
        },
        subModels: [
            {
                id: "front",
                name: "프론트 (Front)",
                maskingImage: "assets/파츠변형/프론트 마스킹.png",
                variations: [
                    {
                        id: "f1", name: "프론트 변형 1", image: "assets/파츠변형/프론트 (1).png", modelSrc: "assets/파츠변형/프론트 1.glb",
                        prompt: "horizontal stripe pattern grill, masterpiece, best quality",
                        models: "<strong style='color:#60a5fa;'>[인페인팅 이미지 생성]</strong>\n- Base: Flux.1 Dev\n- LoRA: Geometric Grill\n\n<strong style='color:#f472b6;'>[3D 모델 생성]</strong>\n- 3D Model: 훈유안 3D 3.0 모델"
                    },
                    {
                        id: "f2", name: "프론트 변형 2", image: "assets/파츠변형/프론트 (2).png", modelSrc: "assets/파츠변형/프론트 2.glb",
                        prompt: "1 front grill design, EV type grill, Blocked grill",
                        models: "<strong style='color:#60a5fa;'>[인페인팅 이미지 생성]</strong>\n- Base: Flux.1 Dev\n- LoRA: Line shape Headlight\n\n<strong style='color:#f472b6;'>[3D 모델 생성]</strong>\n- 3D Model: 훈유안 3D 3.0 모델"
                    },
                    {
                        id: "f3", name: "프론트 변형 3", image: "assets/파츠변형/프론트 (3).png", modelSrc: "assets/파츠변형/프론트 3.glb",
                        prompt: "line shape headlight, 1 headlight crossing over facemask of the car",
                        models: "<strong style='color:#60a5fa;'>[인페인팅 이미지 생성]</strong>\n- Base: Flux.1 Dev\n- LoRA: Line shape Headlight\n\n<strong style='color:#f472b6;'>[3D 모델 생성]</strong>\n- 3D Model: 훈유안 3D 3.0 모델"
                    }
                ],
                prompt: "Precise inpainting on front fascia, modifying grill texture and headlight housing while maintaining overall structural identity.",
                models: "<strong style='color:#60a5fa;'>[인페인팅 이미지 생성]</strong>\n- Base: Flux.1 Dev\n- Tool: ComfyUI Masking\n\n<strong style='color:#f472b6;'>[3D 모델 생성]</strong>\n- 3D Model: 훈유안 3D 3.0 모델",
                info: { model: "Hunyuan 3.0", method: "부분 파츠 변형", views: "프론트 쿼터뷰" }
            },
            {
                id: "rear",
                name: "리어 (Rear)",
                maskingImage: "assets/파츠변형/리어 마스킹.png",
                variations: [
                    {
                        id: "r1", name: "리어 변형 1", image: "assets/파츠변형/리어 (1).png", modelSrc: "assets/파츠변형/리어 1.glb",
                        prompt: "vertical rear lamp design, thin D-shaped form (ㄷ-shaped), minimal and sleek lighting signature",
                        models: "<strong style='color:#60a5fa;'>[인페인팅 이미지 생성]</strong>\n- Base: Flux.1 Dev\n- LoRA: Vertical rear lamp\n\n<strong style='color:#f472b6;'>[3D 모델 생성]</strong>\n- 3D Model: 훈유안 3D 3.0 모델"
                    },
                    {
                        id: "r2", name: "리어 변형 2", image: "assets/파츠변형/리어 (2).png", modelSrc: "assets/파츠변형/리어 2.glb",
                        prompt: "vertical rear lamp design, thin D-shaped form",
                        models: "<strong style='color:#60a5fa;'>[인페인팅 이미지 생성]</strong>\n- Base: Flux.1 Dev\n- LoRA: Vertical rear lamp\n\n<strong style='color:#f472b6;'>[3D 모델 생성]</strong>\n- 3D Model: 훈유안 3D 3.0 모델"
                    },
                    {
                        id: "r3", name: "리어 변형 3", image: "assets/파츠변형/리어 (3).png", modelSrc: "assets/파츠변형/리어 3.glb",
                        prompt: "vertical rear lamp design, thin D-shaped form (ㄷ-shaped), minimal and sleek lighting signature",
                        models: "<strong style='color:#60a5fa;'>[인페인팅 이미지 생성]</strong>\n- Base: Flux.1 Dev\n- LoRA: Vertical rear lamp\n\n<strong style='color:#f472b6;'>[3D 모델 생성]</strong>\n- 3D Model: 훈유안 3D 3.0 모델"
                    }
                ],
                prompt: "Detailed modification of rear diffuser and tail-light assembly using localized masking and seed-controlled generation.",
                models: "<strong style='color:#60a5fa;'>[인페인팅 이미지 생성]</strong>\n- Base: Flux.1 Dev\n- Tool: ComfyUI Masking\n\n<strong style='color:#f472b6;'>[3D 모델 생성]</strong>\n- 3D Model: 훈유안 3D 3.0 모델",
                info: { model: "Hunyuan 3.0", method: "부분 파츠 변형", views: "백 쿼터뷰" }
            },
            {
                id: "wheel",
                name: "휠 (Wheel)",
                maskingImage: "assets/파츠변형/휠 마스킹.png",
                variations: [
                    {
                        id: "w1", name: "휠 변형 1", image: "assets/파츠변형/휠 (1).png", modelSrc: "assets/파츠변형/휠1.glb",
                        prompt: "1 wheel design, Electric Vehicle Design Wheel, Blocked Wheel Design",
                        models: "<strong style='color:#60a5fa;'>[인페인팅 이미지 생성]</strong>\n- Base: Flux.1 Dev\n- LoRA: EV Wheel\n\n<strong style='color:#f472b6;'>[3D 모델 생성]</strong>\n- 3D Model: 훈유안 3D 3.0 모델"
                    },
                    {
                        id: "w2", name: "휠 변형 2", image: "assets/파츠변형/휠 (2).png", modelSrc: "assets/파츠변형/휠2.glb",
                        prompt: "1 wheel design, Mesh type wheel, multi spoke wheel design, {gold|silver} color",
                        models: "<strong style='color:#60a5fa;'>[인페인팅 이미지 생성]</strong>\n- Base: Flux.1 Dev\n- LoRA: Mesh Wheel\n\n<strong style='color:#f472b6;'>[3D 모델 생성]</strong>\n- 3D Model: 훈유안 3D 3.0 모델"
                    },
                    {
                        id: "w3", name: "휠 변형 3", image: "assets/파츠변형/휠 (3).png", modelSrc: "assets/파츠변형/휠3.glb",
                        prompt: "1 wheel design, Electric Vehicle Design Wheel, Blocked Wheel Design",
                        models: "<strong style='color:#60a5fa;'>[인페인팅 이미지 생성]</strong>\n- Base: Flux.1 Dev\n- LoRA: EV Wheel\n\n<strong style='color:#f472b6;'>[3D 모델 생성]</strong>\n- 3D Model: 훈유안 3D 3.0 모델"
                    }
                ],
                prompt: "Wheel design variation focusing on spoke patterns and metallic finishes, ensuring consistent depth alignment with the original rim.",
                models: "<strong style='color:#60a5fa;'>[인페인팅 이미지 생성]</strong>\n- Base: Flux.1 Dev\n- Tool: ComfyUI Masking\n\n<strong style='color:#f472b6;'>[3D 모델 생성]</strong>\n- 3D Model: 훈유안 3D 3.0 모델",
                info: { model: "Hunyuan 3.0", method: "부분 파츠 변형", views: "휠 변경" }
            }
        ]
    }
};

let currentCase = 'workflow';
let currentSubModel = 'suv';
let activePartsVariations = { front: 0, rear: 0, wheel: 0 };

function updateUI() {
    const workflowView = document.getElementById('workflow-view');
    const viewerArea = document.querySelector('.viewer-area');
    const rightSidebar = document.querySelector('.right-sidebar');

    if (currentCase === 'workflow') {
        if (workflowView) workflowView.style.display = 'flex';
        if (viewerArea) viewerArea.style.display = 'none';
        if (rightSidebar) rightSidebar.style.display = 'none';
        return; // Break early so we don't look for researchData['workflow']
    } else {
        if (workflowView) workflowView.style.display = 'none';
        if (viewerArea) viewerArea.style.display = ''; // Restore flex/block
        if (rightSidebar) rightSidebar.style.display = ''; // Restore flex
    }

    let rawData = researchData[currentCase];
    let data;

    // Check if current mode uses sub-models
    if (rawData.subModels) {
        data = rawData.subModels.find(sm => sm.id === currentSubModel) || rawData.subModels[0];
    } else {
        data = rawData;
    }

    // Update Model
    const viewer = document.getElementById('car-model');
    const posterState = document.getElementById('poster-state');

    if (data.modelSrc) {
        viewer.src = data.modelSrc;
        posterState.style.display = ''; // Let model-viewer manage visibility
        posterState.innerHTML = '<span>3D 모델을 불러오는 중...</span>';
    } else {
        viewer.src = "";
        posterState.style.display = 'flex';
        posterState.innerHTML = '<span style="color:#a1a1aa;">선택된 3D 모델이 없습니다.</span>';
    }

    // Update Images
    const imgContainer = document.getElementById('input-images');
    imgContainer.innerHTML = '';

    const previewBox = document.getElementById('image-preview-box');
    const previewImg = document.getElementById('preview-image');

    if (currentCase === 'parts') {
        // Special logic for Parts Variation: Masking -> Sub-images
        const maskThumb = document.createElement('div');
        maskThumb.className = 'mask-container';
        maskThumb.innerHTML = `
            <div class="mask-main-box">
                <img class="img-thumb active" src="${data.maskingImage}" alt="Masking Image">
                <div class="mask-label">마스킹 타겟 제어 영역 (Masking)</div>
            </div>
            <div class="variation-sub-gallery" id="variation-sub-gallery">
                ${data.variations.map((v, i) => `
                    <div class="sub-item" data-index="${i}">
                        <img src="${v.image}" alt="${v.name}">
                        <span>${v.name}</span>
                    </div>
                `).join('')}
            </div>
        `;
        imgContainer.appendChild(maskThumb);

        // Click logic for masking thumb simply shows the preview image
        const maskImg = maskThumb.querySelector('.img-thumb');
        const subGallery = maskThumb.querySelector('#variation-sub-gallery');

        maskImg.onclick = () => {
            // Update UI state for active sub-item
            subGallery.querySelectorAll('.sub-item').forEach(si => si.classList.remove('active'));
            maskImg.classList.add('active');

            if (previewImg) {
                previewImg.src = data.maskingImage;
                previewBox.classList.add('show');
            }
        };

        // Click logic for sub-items
        subGallery.querySelectorAll('.sub-item').forEach(item => {
            item.onclick = () => {
                const idx = item.getAttribute('data-index');
                activePartsVariations[data.id] = parseInt(idx);
                const variation = data.variations[idx];

                // Update UI state
                maskImg.classList.remove('active');
                subGallery.querySelectorAll('.sub-item').forEach(si => si.classList.remove('active'));
                item.classList.add('active');

                // Update Preview
                if (previewImg) {
                    previewImg.src = variation.image;
                    previewBox.classList.add('show');
                }

                // Update 3D Model
                if (variation.modelSrc) {
                    posterState.style.display = 'flex';
                    posterState.innerHTML = '<span>3D 모델을 불러오는 중...</span>';
                    if (typeof viewer.showPoster === 'function') viewer.showPoster();
                    viewer.src = variation.modelSrc;
                    if (viewer.hasAttribute('auto-rotate')) {
                        viewer.removeAttribute('auto-rotate');
                        const btnRotate = document.getElementById('btn-rotate');
                        if (btnRotate) btnRotate.classList.remove('active');
                    }
                }

                // Update Side Panel Info (Prompt & Models) for Parts Variation
                if (variation.prompt) {
                    document.getElementById('prompt-text').innerHTML = variation.prompt.replace(/\n/g, '<br/>');
                }
                if (variation.models) {
                    document.getElementById('models-text').innerHTML = variation.models.replace(/\n/g, '<br/>');
                }
            };
        });

        // Initial state for parts: Auto-select previously viewed or first variation
        const activeIdx = activePartsVariations[data.id] !== undefined ? activePartsVariations[data.id] : 0;
        const targetSubItem = subGallery.querySelectorAll('.sub-item')[activeIdx];
        if (targetSubItem) {
            targetSubItem.click();
        } else if (previewImg) {
            previewImg.src = data.maskingImage;
        }

    } else {
        // Default Logic for Single/Multi View
        data.images.forEach((img, idx) => {
            const thumb = document.createElement('img');
            thumb.className = 'img-thumb' + (idx === 0 ? ' active' : '');
            thumb.src = img;

            // Automatically sync the preview image and camera orbit with the first thumbnail when switching panels
            if (idx === 0) {
                if (previewImg) previewImg.src = img;

                if (data.cameraOrbits && data.cameraOrbits[0]) {
                    const viewer = document.getElementById('car-model');
                    if (typeof viewer.resetTurntableRotation === 'function') viewer.resetTurntableRotation();
                    const orbitParts = data.cameraOrbits[0].split(' ');
                    const theta = parseFloat(orbitParts[0]) + (Math.random() * 0.001);
                    viewer.setAttribute('camera-orbit', `${theta}deg ${orbitParts[1]} ${orbitParts[2]}`);
                }
            }

            // Fallback if image doesn't exist yet
            thumb.onerror = function () {
                this.src = `https://via.placeholder.com/80x50/333/888?text=Image+${idx + 1}`;
            };

            thumb.style.cursor = 'pointer';
            thumb.onclick = () => {
                const previewBox = document.getElementById('image-preview-box');
                const previewImg = document.getElementById('preview-image');

                if (thumb.classList.contains('active')) {
                    // If it's already active, click again naturally "closes" or shrinks it
                    thumb.classList.remove('active');
                    previewBox.classList.remove('show');
                } else {
                    document.querySelectorAll('.img-thumb').forEach(t => t.classList.remove('active'));
                    thumb.classList.add('active');
                    previewImg.src = thumb.src;
                    previewBox.classList.add('show');
                }

                // Rotate the 3D viewer camera to match the selected image
                if (data.cameraOrbits && data.cameraOrbits[idx]) {
                    const viewer = document.getElementById('car-model');
                    if (typeof viewer.resetTurntableRotation === 'function') viewer.resetTurntableRotation();
                    const orbitParts = data.cameraOrbits[idx].split(' ');
                    const theta = parseFloat(orbitParts[0]) + (Math.random() * 0.001);
                    viewer.setAttribute('camera-orbit', `${theta}deg ${orbitParts[1]} ${orbitParts[2]}`);
                    if (viewer.hasAttribute('auto-rotate')) {
                        viewer.removeAttribute('auto-rotate');
                        const btnRotate = document.getElementById('btn-rotate');
                        if (btnRotate) btnRotate.classList.remove('active');
                    }
                }
            };
            imgContainer.appendChild(thumb);
        });
    }

    // Update Prompt & Models (convert \n to <br/> for HTML)
    document.getElementById('prompt-text').innerHTML = data.prompt.replace(/\n/g, '<br/>');
    document.getElementById('models-text').innerHTML = data.models.replace(/\n/g, '<br/>');



    // Initial Dimming and Interaction requirement
    if (!window.firstInteractionHandled && (currentCase === 'single' || currentCase === 'multi')) {
        document.body.classList.add('dim-ui');
        window.firstInteractionHandled = true; // Only trigger this dimming once
    }

    // Update Top-Left Mini Workflow Box
    const mwSubtitle = document.getElementById('mw-subtitle');
    const mwStepsContainer = document.getElementById('mw-steps-container');

    if (rawData.workflow && mwSubtitle && mwStepsContainer) {
        mwSubtitle.textContent = rawData.workflow.subtitle;
        mwSubtitle.style.display = rawData.workflow.subtitle ? 'inline' : 'none'; // Hide if subtitle is empty

        mwStepsContainer.innerHTML = '';
        rawData.workflow.steps.forEach((step, idx) => {
            const stepSpan = document.createElement('span');
            stepSpan.className = 'mw-step';
            stepSpan.textContent = step;
            mwStepsContainer.appendChild(stepSpan);

            // Add arrow if not the last step
            if (idx < rawData.workflow.steps.length - 1) {
                const arrowSpan = document.createElement('span');
                arrowSpan.className = 'mw-arrow';
                arrowSpan.textContent = '⟶';
                mwStepsContainer.appendChild(arrowSpan);
            }
        });

        // Render Extended Evaluation and Method Information
        let extendedInfoBox = document.getElementById('mw-extended-info');
        if (!extendedInfoBox) {
            extendedInfoBox = document.createElement('div');
            extendedInfoBox.id = 'mw-extended-info';
            extendedInfoBox.className = 'mw-extended-info';
            mwStepsContainer.parentElement.appendChild(extendedInfoBox);
        }

        extendedInfoBox.innerHTML = '';
        if (rawData.workflow.methodDescription || rawData.workflow.evaluationPoint) {
            extendedInfoBox.style.display = 'block';
            let html = '';
            if (rawData.workflow.methodDescription) {
                html += `<div class="mw-section-title">생성 방법 및 특징</div>
                         <div class="mw-section-desc">${rawData.workflow.methodDescription}</div>`;
            }
            if (rawData.workflow.evaluationPoint) {
                html += `<div class="mw-section-title evaluation-title">🎯 평가 주안점</div>
                         <div class="mw-section-desc evaluation-desc">${rawData.workflow.evaluationPoint}</div>`;
            }
            extendedInfoBox.innerHTML = html;
        } else {
            extendedInfoBox.style.display = 'none';
        }
    }

    // Category Panel logic
    const catPanel = document.getElementById('category-panel');
    if (catPanel) {
        if (rawData.subModels) {
            catPanel.style.display = 'block';
            const catBtnContainer = document.getElementById('category-buttons');
            catBtnContainer.innerHTML = '';

            rawData.subModels.forEach(sm => {
                const btn = document.createElement('button');
                btn.className = 'var-btn' + (sm.id === currentSubModel ? ' active' : '');
                btn.innerHTML = `<span>${sm.name}</span> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;

                btn.onclick = () => {
                    if (currentSubModel === sm.id) return;
                    currentSubModel = sm.id;
                    updateUI();
                };
                catBtnContainer.appendChild(btn);
            });
        } else {
            catPanel.style.display = 'none';
        }
    }

    // Dynamic Title & Description Updates for Panels
    const catTitle = document.querySelector('#category-panel .panel-title');
    const catDesc = document.querySelector('#category-panel p');
    const inputTitle = document.querySelector('#input-images').previousElementSibling;

    if (currentCase === 'parts') {
        if (catTitle) catTitle.textContent = "디자인 수정 영역 분류";
        if (catDesc) catDesc.textContent = "단일 이미지 내에, 디자인 수정 및 변형이 필요한 차량의 각 파츠(부위)를 선택합니다.";
        if (inputTitle) inputTitle.textContent = "디자인 수정 영역 (Inpainting)";
    } else {
        if (catTitle) catTitle.textContent = "오브젝트 분류 (Category)";
        if (catDesc) catDesc.textContent = "표준화된 멀티뷰 입력 체계를 평가하기 위한 차량 카테고리입니다.";
        if (inputTitle) inputTitle.textContent = "생성 이미지 (Input)";
    }

    // Variation Panel logic
    const varPanel = document.getElementById('variation-panel');
    if (currentCase === 'parts' && data.variations) {
        varPanel.style.display = 'block';
        const btnContainer = document.getElementById('variation-buttons');
        btnContainer.innerHTML = '';
        data.variations.forEach(v => {
            const btn = document.createElement('button');
            btn.className = 'var-btn' + (v.id === 'base' ? ' active' : '');
            btn.innerHTML = `<span>${v.name}</span> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;

            btn.onclick = () => {
                document.querySelectorAll('.var-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Change UI to reflect variation
                if (v.modelSrc) viewer.src = v.modelSrc;

                // Highlight corresponding image if applicable, or simulate loading
                console.log(`Switched to variation: ${v.name}`);
            };
            btnContainer.appendChild(btn);
        });
    } else {
        varPanel.style.display = 'none';
    }
}

// Tab Listeners
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        currentCase = e.target.getAttribute('data-case');
        updateUI();
    });
});

// --- Bottom Controls Logic ---
const viewer = document.getElementById('car-model');
const btnRotate = document.getElementById('btn-rotate');
const btnTextured = document.getElementById('btn-textured');
const btnUntextured = document.getElementById('btn-untextured');
const btnZebra = document.getElementById('btn-zebra');

// 1. Rotate Toggle
btnRotate.addEventListener('click', () => {
    if (viewer.hasAttribute('auto-rotate')) {
        viewer.removeAttribute('auto-rotate');
        btnRotate.classList.remove('active');
    } else {
        viewer.setAttribute('auto-rotate', '');
        btnRotate.classList.add('active');
    }
});

// Helper for resetting active styling for texture buttons
function setTextureBtnActive(activeBtn) {
    btnTextured.classList.remove('active');
    btnUntextured.classList.remove('active');
    btnZebra.classList.remove('active');
    if (activeBtn) activeBtn.classList.add('active');
}

// Material Caching System
let isTexturesCached = false;
const originalBaseColors = new Map();
const originalRoughness = new Map();
const originalMetallic = new Map();
const originalTextures = new Map();
let originalEnv = "neutral";
let originalExposure = "1.0";

// Clear cache when a new 3D model loads (e.g., switching tabs)
viewer.addEventListener('load', () => {
    isTexturesCached = false;
    originalBaseColors.clear();
    originalRoughness.clear();
    originalMetallic.clear();
    originalTextures.clear();

    // Default to textured mode on new load
    if (btnZebra.classList.contains('active')) {
        viewer.setAttribute('environment-image', originalEnv);
        viewer.setAttribute('exposure', originalExposure);
    }
    setTextureBtnActive(btnTextured);
});

function cacheOriginalMaterials() {
    if (!viewer.model || isTexturesCached) return;

    // Cache Global state
    originalEnv = viewer.getAttribute('environment-image') || "neutral";
    originalExposure = viewer.getAttribute('exposure') || "1.0";

    for (const mat of viewer.model.materials) {
        originalBaseColors.set(mat.name, mat.pbrMetallicRoughness.baseColorFactor);
        originalRoughness.set(mat.name, mat.pbrMetallicRoughness.roughnessFactor);
        originalMetallic.set(mat.name, mat.pbrMetallicRoughness.metallicFactor);

        const baseColorTex = mat.pbrMetallicRoughness.baseColorTexture;
        if (baseColorTex && baseColorTex.texture) {
            originalTextures.set(mat.name, baseColorTex.texture);
        }
    }
    isTexturesCached = true;
}

// Generate Zebra Pattern Equirectangular Data URL (Optimized Resolution)
function generateZebraPattern() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024; // Optimized from 2048 to save GPU memory
    canvas.height = 512;  // Optimized from 1024
    const ctx = canvas.getContext('2d');

    const stripeWidth = 20; // Proportional density
    for (let i = 0; i < canvas.width; i += stripeWidth * 2) {
        ctx.fillStyle = '#000';
        ctx.fillRect(i, 0, stripeWidth, canvas.height);
        ctx.fillStyle = '#fff';
        ctx.fillRect(i + stripeWidth, 0, stripeWidth, canvas.height);
    }
    return canvas.toDataURL('image/png');
}

const zebraPatternUrl = generateZebraPattern();

// 2. Textured Mode
btnTextured.addEventListener('click', () => {
    if (btnZebra.classList.contains('active')) {
        // Turn off Zebra
        viewer.setAttribute('environment-image', originalEnv);
        viewer.setAttribute('exposure', originalExposure);
    }

    if (btnTextured.classList.contains('active')) return;
    setTextureBtnActive(btnTextured);

    if (!viewer.model || !isTexturesCached) return;

    // Restore original materials instantly from cache
    for (const mat of viewer.model.materials) {
        const origColor = originalBaseColors.get(mat.name);
        if (origColor) mat.pbrMetallicRoughness.setBaseColorFactor(origColor);

        const origRough = originalRoughness.get(mat.name);
        if (origRough !== undefined) mat.pbrMetallicRoughness.setRoughnessFactor(origRough);

        const origMetal = originalMetallic.get(mat.name);
        if (origMetal !== undefined) mat.pbrMetallicRoughness.setMetallicFactor(origMetal);

        const origTex = originalTextures.get(mat.name);
        if (origTex && mat.pbrMetallicRoughness.baseColorTexture) {
            mat.pbrMetallicRoughness.baseColorTexture.setTexture(origTex);
        }
    }
});

// 3. Untextured (Clay) Mode
btnUntextured.addEventListener('click', () => {
    if (btnZebra.classList.contains('active')) {
        // Turn off Zebra
        viewer.setAttribute('environment-image', originalEnv);
        viewer.setAttribute('exposure', originalExposure);
    }

    if (btnUntextured.classList.contains('active')) return;
    setTextureBtnActive(btnUntextured);

    if (!viewer.model) return;
    cacheOriginalMaterials(); // Cache original state before modifying

    for (const mat of viewer.model.materials) {
        // Set to darker matte grey color to reveal surface details better
        mat.pbrMetallicRoughness.setBaseColorFactor([0.35, 0.35, 0.35, 1.0]);
        // Remove metalness and increase roughness for a pure clay look without blown-out highlights
        mat.pbrMetallicRoughness.setMetallicFactor(0.0);
        mat.pbrMetallicRoughness.setRoughnessFactor(0.6);

        // Hide texture efficiently
        if (mat.pbrMetallicRoughness.baseColorTexture) {
            mat.pbrMetallicRoughness.baseColorTexture.setTexture(null);
        }
    }
});

// 4. Zebra Stripe Mode
btnZebra.addEventListener('click', () => {
    if (btnZebra.classList.contains('active')) {
        // Toggle off: return to textured as default
        btnTextured.click();
        return;
    }

    setTextureBtnActive(btnZebra);
    if (!viewer.model) return;
    cacheOriginalMaterials();

    // High reflection logic for Zebra stripes
    viewer.setAttribute('environment-image', zebraPatternUrl);
    viewer.setAttribute('exposure', '1.2'); // Slightly increased for better overall brightness

    for (const mat of viewer.model.materials) {
        // Medium dark grey for balanced visibility and sharp reflections
        mat.pbrMetallicRoughness.setBaseColorFactor([0.15, 0.15, 0.15, 1.0]);
        mat.pbrMetallicRoughness.setMetallicFactor(1.0);
        mat.pbrMetallicRoughness.setRoughnessFactor(0.04); // Optimized from 0.01 for better performance

        if (mat.pbrMetallicRoughness.baseColorTexture) {
            mat.pbrMetallicRoughness.baseColorTexture.setTexture(null);
        }
    }
});

// Init
window.onload = () => {
    updateUI();
};

// --- Custom Smooth Scroll Snap Logic ---
let isAnimating = false;
let currentSectionIndex = 0;
let guideBlinkTimer = null;

const navBtnSingle = document.querySelector('.tab[data-case="single"]');

const workflowContainer = document.querySelector('.workflow-container');

// Easing function for a luxurious "slow down as it hits" feel (Quart Out)
function easeOutQuart(t) {
    return 1 - (--t) * t * t * t;
}

/**
 * Smoothly animates the scrollTop of the container to a target position.
 */
function smoothScrollTo(targetY, duration = 1200) {
    const startY = workflowContainer.scrollTop;
    const distance = targetY - startY;
    let startTime = null;

    isAnimating = true;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        const ease = easeOutQuart(progress);
        workflowContainer.scrollTop = startY + distance * ease;

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        } else {
            // Signal animation completion after a small cooldown to avoid rapid skipping
            setTimeout(() => { isAnimating = false; }, 200);
        }
    }

    requestAnimationFrame(animation);
}

/**
 * Moves to a specific section by index.
 */
function goToSection(index) {
    const sections = document.querySelectorAll('.wf-scroll-section');
    if (index < 0 || index >= sections.length) return;

    currentSectionIndex = index;
    workflowContainer.scrollTo({
        top: sections[currentSectionIndex].offsetTop,
        behavior: 'smooth' // CSS scroll-behavior: smooth will also work, but this is a safe fallback
    });

    // Handle navigation guidance at the bottom of workflow
    clearTimeout(guideBlinkTimer);
    if (navBtnSingle) navBtnSingle.classList.remove('guide-blink');

    const sectionsTotal = sections.length;
    if (currentCase === 'workflow' && currentSectionIndex === sectionsTotal - 1) {
        guideBlinkTimer = setTimeout(() => {
            if (currentCase === 'workflow' && currentSectionIndex === sectionsTotal - 1 && navBtnSingle) {
                navBtnSingle.classList.add('guide-blink');
            }
        }, 3000);
    }
}

// --- Native Scroll Tracking with IntersectionObserver ---
const observerOptions = {
    root: workflowContainer,
    threshold: 0.6 // Trigger when 60% of the section is visible
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sections = Array.from(document.querySelectorAll('.wf-scroll-section'));
            const index = sections.indexOf(entry.target);
            if (index !== -1) {
                currentSectionIndex = index;

                // Handle navigation guidance timer when reaching the last section
                handleGuidanceAtBottom(index, sections.length);
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.wf-scroll-section').forEach(section => {
    sectionObserver.observe(section);
});

function handleGuidanceAtBottom(index, total) {
    clearTimeout(guideBlinkTimer);
    if (navBtnSingle) navBtnSingle.classList.remove('guide-blink');

    if (currentCase === 'workflow' && index === total - 1) {
        guideBlinkTimer = setTimeout(() => {
            if (currentCase === 'workflow' && index === total - 1 && navBtnSingle) {
                navBtnSingle.classList.add('guide-blink');
            }
        }, 3000);
    }
}

// Removed direct 'wheel' interceptor to allow native scrolling and fix taller-than-viewport handling.

// Reset index when switching tabs
function resetWorkflowPosition() {
    currentSectionIndex = 0;
    if (workflowContainer) workflowContainer.scrollTop = 0;
}

// --- Modified Tab Listener to include reset ---
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        currentCase = e.target.getAttribute('data-case');

        if (currentCase === 'workflow') {
            resetWorkflowPosition();
        } else {
            // Remove blink if we move to any other tab
            clearTimeout(guideBlinkTimer);
            if (navBtnSingle) navBtnSingle.classList.remove('guide-blink');
        }

        updateUI();
    });
});

// Optional: Enable snapping on window resize
window.addEventListener('resize', () => {
    if (currentCase === 'workflow') {
        const sections = document.querySelectorAll('.wf-scroll-section');
        if (sections[currentSectionIndex]) {
            workflowContainer.scrollTop = sections[currentSectionIndex].offsetTop;
        }
    }
});

// --- 3D Model Interaction (Fade out workflow box) ---
const carModel = document.getElementById('car-model');
const miniBox = document.querySelector('.mini-workflow-box');

if (carModel && miniBox) {
    carModel.addEventListener('pointerdown', () => {
        miniBox.classList.add('faded');

        // Handle un-dimming and initial interaction
        if (document.body.classList.contains('dim-ui')) {
            document.body.classList.remove('dim-ui');
            setTimeout(() => {
                if (typeof window.showBottomControlsHighlight === 'function') {
                    window.showBottomControlsHighlight();
                }
            }, 1000);
        }
    });

    // Listen on window to catch pointer up even if cursor moves outside the viewer
    window.addEventListener('pointerup', () => {
        miniBox.classList.remove('faded');
    });
}

// --- Full screen (Focus Mode) Toggle ---
const btnFullscreen = document.getElementById('btn-fullscreen');
const btnExitFullscreen = document.getElementById('btn-exit-fullscreen');

if (btnFullscreen) {
    btnFullscreen.addEventListener('click', () => {
        document.body.classList.add('focus-mode');
        if (btnExitFullscreen) btnExitFullscreen.style.display = 'flex';
    });
}

if (btnExitFullscreen) {
    btnExitFullscreen.addEventListener('click', () => {
        document.body.classList.remove('focus-mode');
        btnExitFullscreen.style.display = 'none';
    });
}

// --- Interactive Tooltip Logic ---
window.controlsTooltipShown = false;
window.firstInteractionHandled = false;

window.showBottomControlsHighlight = function () {
    if (window.controlsTooltipShown) return;
    const tooltip = document.getElementById('controls-tooltip');
    const bottomControls = document.querySelector('.bottom-controls');

    if (tooltip && bottomControls && (currentCase === 'single' || currentCase === 'multi')) {
        window.controlsTooltipShown = true;
        tooltip.classList.add('show');
        bottomControls.classList.add('highlight-flash');

        // Auto-hide after 8 seconds
        setTimeout(() => {
            tooltip.classList.remove('show');
            bottomControls.classList.remove('highlight-flash');
        }, 8000);
    }
};

// Hide immediately if any bottom control is clicked
document.querySelectorAll('.bottom-controls .ctrl-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const tooltip = document.getElementById('controls-tooltip');
        const bottomControls = document.querySelector('.bottom-controls');
        if (tooltip) tooltip.classList.remove('show');
        if (bottomControls) bottomControls.classList.remove('highlight-flash');
    });
});
