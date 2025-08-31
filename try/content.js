// Content script for Amazon Job Scheduler Extension

(function() {
    'use strict';

    console.log('Amazon Job Scheduler Extension: Content script loaded');

    // Initialize the extension when page loads
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeExtension);
    } else {
        initializeExtension();
    }

    function initializeExtension() {
        // Check if we're on the Amazon hiring site
        if (window.location.hostname.includes('hiring.amazon.ca') || 
            window.location.hostname.includes('auth.hiring.amazon.com')) {
            
            console.log('Amazon Job Scheduler: Detected Amazon hiring site');
            
            // Listen for messages from background script
            chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
                console.log('Content script received message:', message);
                
                if (message.action === 'playSound') {
                    playNotificationSound();
                } else if (message.action === 'start_fetch') {
                    console.log('Starting job fetch process');
                } else if (message.action === 'stop_fetch') {
                    console.log('Stopping job fetch process');
                }
                
                sendResponse({status: 'received'});
            });

            // Initialize extension functionality
            setupExtensionFeatures();
        }
    }

    function setupExtensionFeatures() {
        // Check if extension is activated
        chrome.storage.local.get(['__ap'], (result) => {
            if (result.__ap) {
                console.log('Extension is activated');
                // Extension is active, start monitoring
                startJobMonitoring();
            }
        });

        // Listen for storage changes
        chrome.storage.onChanged.addListener((changes, namespace) => {
            if (namespace === 'local' && changes.__ap) {
                if (changes.__ap.newValue) {
                    startJobMonitoring();
                } else {
                    stopJobMonitoring();
                }
            }
        });
    }

    function startJobMonitoring() {
        console.log('Starting job monitoring...');
        // Job monitoring logic will be handled by fetch.js
    }

    function stopJobMonitoring() {
        console.log('Stopping job monitoring...');
    }

    function playNotificationSound() {
        try {
            const audio = new Audio(chrome.runtime.getURL('alert.wav'));
            audio.play().catch(e => console.log('Could not play notification sound:', e));
        } catch (error) {
            console.log('Error playing notification sound:', error);
        }
    }

    // Utility function to wait for elements
    function waitForElement(selector, timeout = 10000) {
        return new Promise((resolve, reject) => {
            const element = document.querySelector(selector);
            if (element) {
                resolve(element);
                return;
            }

            const observer = new MutationObserver((mutations) => {
                const element = document.querySelector(selector);
                if (element) {
                    observer.disconnect();
                    resolve(element);
                }
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });

            setTimeout(() => {
                observer.disconnect();
                reject(new Error(`Element ${selector} not found within ${timeout}ms`));
            }, timeout);
        });
    }

    // Export functions for other scripts
    window.amazonJobSchedulerUtils = {
        waitForElement,
        playNotificationSound
    };

})();