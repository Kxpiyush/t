// Popup functionality for Amazon Job Scheduler Extension

document.addEventListener('DOMContentLoaded', function() {
    const activateToggle = document.getElementById('activate');
    const citySelect = document.getElementById('city');
    const distanceSelect = document.getElementById('distance');
    const workHoursSelect = document.getElementById('work_hours');
    const cityInput = document.getElementById('city-input');
    const clearAllBtn = document.getElementById('clear-all');
    const resetBtn = document.getElementById('reset_info');
    const contactBtn = document.getElementById('contact_us');
    const tutorialBtn = document.getElementById('tutorial');
    const versionSpan = document.getElementById('version');

    // Load saved settings
    loadSettings();

    // Set version
    if (chrome.management) {
        chrome.management.getSelf(function(extensionInfo) {
            if (versionSpan) {
                versionSpan.textContent = `v${extensionInfo.version}`;
            }
        });
    }

    // Event listeners
    if (activateToggle) {
        activateToggle.addEventListener('change', function() {
            chrome.storage.local.set({'__ap': this.checked});
            if (this.checked) {
                chrome.runtime.sendMessage({action: 'start_fetch'});
            } else {
                chrome.runtime.sendMessage({action: 'stop_fetch'});
            }
        });
    }

    if (citySelect) {
        citySelect.addEventListener('change', function() {
            const cityCoordinates = getCityCoordinates(this.value);
            chrome.storage.local.set({
                'selectedCity': this.value,
                'lat': cityCoordinates.lat,
                'lng': cityCoordinates.lng
            });
        });
    }

    if (distanceSelect) {
        distanceSelect.addEventListener('change', function() {
            chrome.storage.local.set({'distance': parseInt(this.value)});
        });
    }

    if (workHoursSelect) {
        workHoursSelect.addEventListener('change', function() {
            chrome.storage.local.set({'jobType': this.value});
        });
    }

    // City tags functionality
    if (cityInput) {
        cityInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && this.value.trim()) {
                addCityTag(this.value.trim());
                this.value = '';
            }
        });
    }

    if (clearAllBtn) {
        clearAllBtn.addEventListener('click', function() {
            clearAllCityTags();
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', function(e) {
            e.preventDefault();
            resetSettings();
        });
    }

    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            alert('Contact feature disabled for privacy');
        });
    }

    if (tutorialBtn) {
        tutorialBtn.addEventListener('click', function() {
            alert('Tutorial feature disabled for privacy');
        });
    }

    // Functions
    function loadSettings() {
        chrome.storage.local.get([
            '__ap', 'selectedCity', 'distance', 'jobType', 'cityTags'
        ], function(result) {
            if (activateToggle) {
                activateToggle.checked = result.__ap || false;
            }
            if (citySelect && result.selectedCity) {
                citySelect.value = result.selectedCity;
            }
            if (distanceSelect && result.distance) {
                distanceSelect.value = result.distance;
            }
            if (workHoursSelect && result.jobType) {
                workHoursSelect.value = result.jobType;
            }
            
            loadCityTags(result.cityTags || []);
        });
    }

    function getCityCoordinates(city) {
        const coordinates = {
            'Acheson': {lat: 53.4844, lng: -113.6119},
            'Ajax': {lat: 43.8509, lng: -79.0204},
            'Balzac': {lat: 51.1847, lng: -113.9624},
            'Bolton': {lat: 43.8828, lng: -79.7311},
            'Brampton': {lat: 43.7315, lng: -79.7624},
            'Calgary': {lat: 51.0447, lng: -114.0719},
            'Cambridge': {lat: 43.3616, lng: -80.3144},
            'Concord': {lat: 43.7969, lng: -79.4819},
            'Dartmouth': {lat: 44.6820, lng: -63.5991},
            'Edmonton': {lat: 53.5444, lng: -113.4909},
            'Etobicoke': {lat: 43.6205, lng: -79.5132},
            'Hamilton': {lat: 43.2557, lng: -79.8711},
            'Mississauga': {lat: 43.5890, lng: -79.6441},
            'Nisku': {lat: 53.3569, lng: -113.5114},
            'Northborough': {lat: 44.3106, lng: -78.0947},
            'Ottawa': {lat: 45.4215, lng: -75.6972},
            'Rocky View': {lat: 51.1000, lng: -114.0000},
            'Scarborough': {lat: 43.7731, lng: -79.2578},
            'Sidney': {lat: 48.6519, lng: -123.3957},
            'ST. Thomas': {lat: 42.7834, lng: -81.1757},
            'Stoney Creek': {lat: 43.2186, lng: -79.7624},
            'Toronto': {lat: 43.6532, lng: -79.3832},
            'Vancouver': {lat: 49.2827, lng: -123.1207},
            'Vaughan': {lat: 43.8361, lng: -79.4983},
            'Whitby': {lat: 43.8975, lng: -78.9429},
            'Windsor': {lat: 42.3149, lng: -83.0364}
        };
        return coordinates[city] || {lat: 43.6532, lng: -79.3832}; // Default to Toronto
    }

    function addCityTag(city) {
        chrome.storage.local.get(['cityTags'], function(result) {
            let cityTags = result.cityTags || [];
            if (!cityTags.includes(city)) {
                cityTags.push(city);
                chrome.storage.local.set({'cityTags': cityTags});
                loadCityTags(cityTags);
            }
        });
    }

    function loadCityTags(tags) {
        const tagContainer = document.getElementById('tag-input-box');
        if (!tagContainer) return;

        // Clear existing tags except input
        const existingTags = tagContainer.querySelectorAll('.tag');
        existingTags.forEach(tag => tag.remove());

        tags.forEach(tagText => {
            const tag = document.createElement('span');
            tag.className = 'tag';
            tag.innerHTML = `${tagText} <span class="remove-tag" data-tag="${tagText}">×</span>`;
            tagContainer.insertBefore(tag, cityInput);
            
            tag.querySelector('.remove-tag').addEventListener('click', function() {
                removeCityTag(this.dataset.tag);
            });
        });

        // Show/hide clear all button
        if (clearAllBtn) {
            clearAllBtn.style.display = tags.length > 0 ? 'block' : 'none';
        }
    }

    function removeCityTag(tagText) {
        chrome.storage.local.get(['cityTags'], function(result) {
            let cityTags = result.cityTags || [];
            cityTags = cityTags.filter(tag => tag !== tagText);
            chrome.storage.local.set({'cityTags': cityTags});
            loadCityTags(cityTags);
        });
    }

    function clearAllCityTags() {
        chrome.storage.local.set({'cityTags': []});
        loadCityTags([]);
    }

    function resetSettings() {
        chrome.storage.local.clear(function() {
            loadSettings();
            if (activateToggle) {
                activateToggle.checked = false;
            }
            loadCityTags([]);
        });
    }
});