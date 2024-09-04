// odoo.define('boot_ia.scripts', function (require) {
//     'use strict';
//     const core = require('web.core');
//     const publicWidget = require('web.public.widget');

    (function() {
        "use strict";
        const iframeId = "responsiveIframe";
        const defaultWidth = "5vw";
        const defaultHeight = "5rem";
        const smallScreenWidth = "35rem";
        const smallScreenHeight = "38.5rem";
    
        function initChatbot() {
            const scripts = document.getElementsByTagName("script");
            let currentScript = null;
    
            for (let i = 0; i < scripts.length; i++) {
                if (scripts[i].src.includes("scripts.js")) {
                    currentScript = scripts[i];
                    break;
                }
            }
    
            if (!currentScript) {
                console.error("Current script not found.");
                return;
            }
    
            const projectUrl = currentScript.getAttribute("data-project-url");
            if (!projectUrl) {
                console.error('Data attribute "data-project-url" not found in the script tag.');
                return;
            }
    
            const iframe = document.createElement("iframe");
            iframe.id = iframeId;
            iframe.src = projectUrl;
            iframe.style.position = "fixed";
            iframe.style.zIndex = "100";
            iframe.style.overflow = "hidden";
            iframe.style.bottom = "0";
            iframe.style.right = "0";
            iframe.style.border = "none";
            iframe.style.borderRadius = "10px";
            iframe.style.width = defaultWidth;
            iframe.style.height = defaultHeight;
            iframe.setAttribute("allow", "microphone");
    
            document.body.appendChild(iframe);
    
            function handleMessage(event) {
                const iframeElement = document.getElementById(iframeId);
                if (iframeElement && event.data.type === "chatbotStateChange") {
                    if (event.data.isClosed) {
                        setTimeout(() => {
                            iframeElement.style.width = defaultWidth;
                            iframeElement.style.height = defaultHeight;
                        }, 300);
                    } else {
                        if (window.innerWidth < 1000) {
                            iframeElement.style.width = defaultWidth;
                            iframeElement.style.height = defaultHeight;
                        } else {
                            iframeElement.style.width = smallScreenWidth;
                            iframeElement.style.height = smallScreenHeight;
                        }
                    }
                }
            }
    
            window.addEventListener("message", handleMessage);
    
            return function() {
                window.removeEventListener("message", handleMessage);
                document.body.removeChild(iframe);
            };
        }
    
        initChatbot();
    })();
    
    
// });
