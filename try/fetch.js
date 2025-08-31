(async function (a) {
    document['head']['insertAdjacentHTML']('beforeend', '<style>.swal2-modal\x20:is(h2,\x20p){color:\x20initial;\x20margin:\x200;line-height:\x201.25;}.swal2-modal\x20p+p{margin-top:\x201rem;}#consulate_date_time,#asc_date_time{display:block!important;}.swal2-select{width:auto!important;}.swal2-timer-progress-bar{background:rgba(255,255,255,0.6)!important;}.swal2-toast.swal2-show{background:rgba(0,0,0,0.75)!important;}</style>');
    let b = null, c = 0xc8;
    const d = [
        'already-applied-but-can-be-reset',
        'consent'
    ];
    function e() {
        const M = window['location']['href'];
        return d['some'](N => M['includes'](N));
    }
    if (e())
        return;
    async function f() {
        const M = 0x2710, N = 0xfa;
        let O = 0x0;
        while (O < M) {
            const P = document['querySelector']('input[data-test-id=\x22input-test-id-emailId\x22]');
            if (P && P['value'])
                return P;
            await new Promise(Q => setTimeout(Q, N)), O += N;
        }
        return await Swal['fire']({
            'title': 'Attention\x20please.',
            'html': 'Please\x20sign-in\x20again',
            'allowEscapeKey': ![],
            'allowEnterKey': ![],
            'allowOutsideClick': ![],
            'icon': 'warning',
            'confirmButtonText': 'Ok'
        }), location['href'] = location['href']['replace']('https://hiring.amazon.ca/#/'), null;
    }
    let g = null, h = null, i = null, j = null, k = null, l = 43.653524, m = -79.383907, n = 0x5, o = null, p = ![], q = ![], r = 0x0, s = 'blsappointments.ca@gmail.com', t = 0x64, u = 0x5, v = 'https://amazonjobsschedulert.azurewebsites.net', w = ![], x = ![];
    $version = '1.0.0';
    async function y() {
        [g, h, j, k, l, m, n, o, p, $version, i] = await Promise['all']([
            chrome['storage']['local']['get']('__un')['then'](M => M['__un'] || null),
            chrome['storage']['local']['get']('__pw')['then'](M => M['__pw'] || null),
            chrome['storage']['local']['get']('candidateID')['then'](M => M['candidateID'] || null),
            chrome['storage']['local']['get']('selectedCity')['then'](M => M['selectedCity'] || 'Toronto'),
            chrome['storage']['local']['get']('lat')['then'](M => M['lat'] || 43.653524),
            chrome['storage']['local']['get']('lng')['then'](M => M['lng'] || -79.383907),
            chrome['storage']['local']['get']('distance')['then'](M => M['distance'] || 0x5),
            chrome['storage']['local']['get']('jobType')['then'](M => M['jobType'] || 'Any'),
            chrome['storage']['local']['get']('__ap')['then'](M => typeof M['__ap'] !== 'undefined' ? M['__ap'] : ![]),
            chrome['storage']['local']['get']('$version')['then'](M => M['$version'] || '1.0.0'),
            chrome['storage']['local']['get']('__country')['then'](M => M['__country'] || null)
        ]);
    }
    chrome['storage']['onChanged']['addListener'](function (M, N) {
        N === 'local' && (M['selectedCity'] && (k = M['selectedCity']['newValue']), M['distance'] && (n = M['distance']['newValue']), M['lat'] && (l = M['lat']['newValue']), M['lng'] && (m = M['lng']['newValue']), M['jobType'] && (o = M['jobType']['newValue']));
    }), await y();
    async function z(M) {
        // Sync function removed - no longer needed without credit system
        return;
    }
    async function A() {
        const M = window['location']['href'], N = M['includes']('#/contactInformation'), O = M['includes']('#/login'), P = M['includes']('jobSearch');
        let Q = await chrome['storage']['local']['get']('__uc')['then'](({__uc: T}) => T), R = a['includes']('login'), S = a['includes']('jobSearch');
        if (O) {
            const T = document['querySelector']('button[data-test-component=\x22StencilReactButton\x22][data-test-id=\x22consentBtn\x22]\x20div[data-test-component=\x22StencilReactRow\x22].hvh-careers-emotion-n1m10m');
            if (T)
                T['click']();
            else {
            }
            if (!i) {
                const X = document['querySelector']('div[data-test-component=\x22StencilReactRow\x22].css-hxw9t3\x20button[data-test-component=\x22StencilReactButton\x22][type=\x22button\x22].e4s17lp0.css-1ipr55l\x20div[data-test-component=\x22StencilReactRow\x22].css-n1m10m');
                if (X)
                    X['click']();
                else {
                }
                i = await Swal['fire']({
                    'title': 'Attention\x20please.',
                    'html': 'Please\x20select\x20your\x20country',
                    'input': 'select',
                    'inputOptions': {
                        'Canada': 'Canada',
                        'United\x20States': 'United\x20States'
                    },
                    'inputPlaceholder': 'Select\x20a\x20country',
                    'allowEscapeKey': ![],
                    'allowEnterKey': ![],
                    'allowOutsideClick': ![],
                    'icon': 'warning',
                    'confirmButtonText': 'Next',
                    'inputValidator': Y => {
                        return new Promise(Z => {
                            Y ? Z() : Z('You\x20need\x20to\x20select\x20a\x20country');
                        });
                    }
                })['then'](Y => {
                    const Z = Y['value'];
                    return chrome['storage']['local']['set']({ '__country': Z }), Z;
                });
            }
            !g && (g = await Swal['fire']({
                'title': 'Attention\x20please.',
                'html': 'Please\x20provide\x20the\x20email\x20to\x20login',
                'input': 'email',
                'inputLabel': 'Your\x20email\x20address',
                'inputPlaceholder': 'Enter\x20your\x20email\x20address',
                'allowEscapeKey': ![],
                'allowEnterKey': ![],
                'allowOutsideClick': ![],
                'icon': 'warning',
                'confirmButtonText': 'Next'
            })['then'](Y => {
                return chrome['storage']['local']['set']({ '__un': Y['value'] }), Y['value'];
            }));
            !h && (h = await Swal['fire']({
                'title': 'Attention\x20please.',
                'html': 'Please\x20provide\x20the\x206-digit\x20PIN',
                'input': 'password',
                'inputLabel': 'Your\x206-digit\x20PIN',
                'inputPlaceholder': 'Enter\x20your\x206-digit\x20PIN',
                'inputAttributes': {
                    'maxlength': 0x6,
                    'pattern': '\x5cd*'
                },
                'allowEscapeKey': ![],
                'allowEnterKey': ![],
                'allowOutsideClick': ![],
                'icon': 'warning',
                'confirmButtonText': 'Submit'
            })['then'](Y => {
                return chrome['storage']['local']['set']({ '__pw': Y['value'] }), Y['value'];
            }));
            const U = document['querySelector']('#country-toggle-button');
            if (U) {
                U['click'](), await new Promise(a0 => setTimeout(a0, 0x1f4));
                const Y = await new Promise(a0 => {
                        chrome['storage']['local']['get']('__country', a1 => {
                            a0(a1['__country'] || 'Canada');
                        });
                    }), Z = document['querySelector']('ul[role=\x22listbox\x22]');
                if (Z) {
                    const a0 = Z['querySelectorAll']('li');
                    a0['forEach'](a1 => {
                        a1['textContent']['trim']() === Y && a1['click']();
                    });
                } else {
                }
            } else {
            }
            const V = document['querySelector']('input[data-test-id=\x22input-test-id-login\x22]');
            if (V) {
                V['value'] = g, V['dispatchEvent'](new Event('input', { 'bubbles': !![] }));
                const a1 = document['querySelectorAll']('div[data-test-component=\x22StencilReactRow\x22]');
                a1['forEach'](a2 => {
                    a2['textContent']['trim']() === 'Continue' && a2['click']();
                });
            }
            await new Promise(a2 => setTimeout(a2, 0x3e8));
            const W = document['querySelector']('input[data-test-id=\x22input-test-id-pin\x22]');
            if (W) {
                W['value'] = h, W['dispatchEvent'](new Event('input', { 'bubbles': !![] }));
                const a2 = document['querySelector']('button[data-test-id=\x22button-continue\x22]');
                a2 && a2['click']();
            }
        }
        if (P && !Q) {
            const a3 = document['querySelector']('button[data-test-component=\x22StencilReactButton\x22][data-test-id=\x22consentBtn\x22]\x20div[data-test-component=\x22StencilReactRow\x22].hvh-careers-emotion-n1m10m');
            if (a3) {
                a3['click']();
                const a4 = chrome['runtime']['getURL']('images/popup.png');
                await Swal['fire']({
                    'title': 'Turn\x20on\x20your\x20pop-ups',
                    'html': '<p>Please\x20make\x20sure\x20you\x20have\x20enabled\x20pop-ups\x20in\x20your\x20browser\x20settings\x20for\x20this\x20extension\x20to\x20work\x20properly.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22' + a4 + '\x22\x20alt=\x22Enable\x20Pop-ups\x22\x20style=\x22max-width:100%;\x20height:auto;\x20margin-top:10px;\x22>',
                    'icon': 'warning',
                    'confirmButtonText': 'OK,\x20I\x20have\x20enabled\x20pop-ups',
                    'allowEscapeKey': ![],
                    'allowEnterKey': ![],
                    'allowOutsideClick': ![]
                })['then'](() => {
                    return chrome['storage']['local']['set']({ '__uc': !![] });
                });
            } else {
            }
        }
        if (P) {
            C();
            if (p) {
                J();
                return;
            }
        }
        if (N) {
        }
    }
    async function B() {
        try {
            if (!D())
                return;
            if (typeof p === 'undefined' || !p)
                return;
            Swal['fire']({
                'toast': !![],
                'position': 'bottom-start',
                'timer': c,
                'showConfirmButton': ![],
                'timerProgressBar': !![],
                'html': '<span\x20style=\x22color:\x20white;\x22>Fetching\x20Jobs...</span>'
            });
            const M = o !== 'Any' ? [{
                        'key': 'jobType',
                        'val': [o]
                    }] : [], N = new Date()['toISOString']()['split']('T')[0x0], O = {
                    'operationName': 'searchJobCardsByLocation',
                    'variables': {
                        'searchJobRequest': {
                            'locale': 'en-CA',
                            'country': 'Canada',
                            'keyWords': '',
                            'equalFilters': [],
                            'containFilters': [
                                {
                                    'key': 'isPrivateSchedule',
                                    'val': ['false']
                                },
                                ...M
                            ],
                            'rangeFilters': [{
                                    'key': 'hoursPerWeek',
                                    'range': {
                                        'minimum': 0x0,
                                        'maximum': 0x50
                                    }
                                }],
                            'orFilters': [],
                            'dateFilters': [{
                                    'key': 'firstDayOnSite',
                                    'range': { 'startDate': N }
                                }],
                            'sorters': [],
                            'pageSize': 0x64,
                            'geoQueryClause': {
                                'lat': l,
                                'lng': m,
                                'unit': 'km',
                                'distance': parseInt(n) || 0x5
                            },
                            'consolidateSchedule': !![]
                        }
                    },
                    'query': 'query\x20searchJobCardsByLocation($searchJobRequest:\x20SearchJobRequest!)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20searchJobCardsByLocation(searchJobRequest:\x20$searchJobRequest)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20nextToken\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20jobCards\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20jobId\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20jobTitle\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20city\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20distance\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}'
                }, P = await fetch('https://e5mquma77feepi2bdn4d6h3mpu.appsync-api.us-east-1.amazonaws.com/graphql', {
                    'method': 'POST',
                    'headers': {
                        'accept': '*/*',
                        'accept-language': 'en-US,en;q=0.7',
                        'authorization': 'Bearer\x20<TOKEN>',
                        'content-type': 'application/json',
                        'country': 'Canada',
                        'iscanary': 'false',
                        'priority': 'u=1,\x20i',
                        'sec-ch-ua': '\x22Brave\x22;v=\x22129\x22,\x20\x22Not=A?Brand\x22;v=\x228\x22,\x20\x22Chromium\x22;v=\x22129\x22',
                        'sec-ch-ua-mobile': '?0',
                        'sec-ch-ua-platform': '\x22macOS\x22',
                        'sec-fetch-dest': 'empty',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-site': 'cross-site',
                        'sec-gpc': '1'
                    },
                    'body': JSON['stringify'](O)
                }), Q = await P['json'](), R = Q['data']['searchJobCardsByLocation']['jobCards'];
            if (R && R['length'] > 0x0)
                Swal['fire']({
                    'toast': !![],
                    'position': 'bottom-start',
                    'timer': c,
                    'showConfirmButton': ![],
                    'timerProgressBar': !![],
                    'html': '<span\x20style=\x22color:\x20green;\x22>Found\x20a\x20Job,\x20now\x20we\x20will\x20match\x20city</span>'
                }), K(), R['forEach'](S => {
                }), E(R);
            else {
            }
        } catch (S) {
            console['error']('Error\x20fetching\x20job\x20listings:', S);
        }
    }
    async function C() {
        if (!j) {
            window['location']['href'] = 'https://hiring.amazon.ca/app#/contactInformation', await f();
            const M = document['querySelector']('input[data-test-id=\x22input-test-id-emailId\x22]');
            if (M && M['value']) {
                const N = M['value'];
                chrome['storage']['local']['set']({ 'candidateID': N }, function () {
                    window['location']['href'] = 'https://hiring.amazon.ca/app#/jobSearch';
                });
            }
        } else {
        }
    }
    function D() {
        const M = window['location']['href'], N = 'https://hiring.amazon.ca/app#/jobSearch';
        return M['includes'](N);
    }
    async function E(M) {
        const N = await chrome['storage']['local']['get'](['cityTags']), O = N['cityTags'] || [];
        if (O['length'] === 0x0)
            return;
        const P = O['map'](R => R['toLowerCase']()['replace'](/[^a-zA-Z]/g, ''));
        let Q = null;
        for (const R of M) {
            if (!R['city']) {
                const S = await chrome['storage']['local']['get'](['cityTags']), T = S['cityTags'] || [], U = T['map'](V => V['toLowerCase']()['replace'](/[^a-zA-Z]/g, ''));
                P['push'](...U);
            }
            if (R['city']) {
                const V = R['city']['toLowerCase']()['replace'](/[^a-zA-Z]/g, '');
                if (P['some'](W => V['includes'](W))) {
                    chrome['runtime']['sendMessage']({ 'action': 'playSound' }), Q = R;
                    break;
                }
            }
        }
        if (Q) {
            const W = 'https://hiring.amazon.ca/app#/jobDetail?jobId=' + Q['jobId'] + '&locale=en-CA';
            window['location']['href'] = W, F();
        } else
            !b && (b = setInterval(() => {
                p ? B() : (clearInterval(b), b = null);
            }, c));
    }
    function F() {
        const M = new MutationObserver((N, O) => {
            const P = document['querySelector']('div[data-test-component=\x22StencilText\x22]\x20em');
            P && (P['click'](), O['disconnect'](), G());
        });
        M['observe'](document['body'], {
            'childList': !![],
            'subtree': !![]
        }), setTimeout(() => {
            const N = document['querySelector']('div[data-test-component=\x22StencilText\x22]\x20em');
            N && (N['click'](), G());
        }, 0xbb8);
    }
    function G() {
        const M = new MutationObserver((O, P) => {
            const Q = document['querySelectorAll']('.scheduleCardLabelText');
            if (Q['length'] > 0x0) {
                const R = Math['floor'](Math['random']() * Q['length']), S = Q[R];
                S['click'](), P['disconnect'](), clearInterval(N), H();
            } else {
            }
        });
        M['observe'](document['body'], {
            'childList': !![],
            'subtree': !![]
        });
        const N = setInterval(() => {
            const O = document['querySelectorAll']('.scheduleCardLabelText');
            if (O['length'] > 0x0) {
                const P = Math['floor'](Math['random']() * O['length']), Q = O[P];
                Q['click'](), M['disconnect'](), clearInterval(N), H();
            }
        }, 0x3e8);
    }
    function H() {
        const M = new MutationObserver((O, P) => {
            const Q = document['querySelector']('button[data-test-id=\x22jobDetailApplyButtonDesktop\x22]');
            Q && (Q['click'](), P['disconnect'](), clearInterval(N));
        });
        M['observe'](document['body'], {
            'childList': !![],
            'subtree': !![]
        });
        const N = setInterval(() => {
            const O = document['querySelector']('button[data-test-id=\x22jobDetailApplyButtonDesktop\x22]');
            O && (O['click'](), M['disconnect'](), clearInterval(N));
        }, 0x3e8);
    }
    function I(M) {
        return new Promise((N, O) => {
            chrome['storage']['local']['get'](M, P => {
                chrome['runtime']['lastError'] ? O(chrome['runtime']['lastError']) : N(P);
            });
        });
    }
    async function J() {
        if (!b) {
            if (!g) {
                window['location']['href'] = 'https://auth.hiring.amazon.com/#/login';
                return;
            }
            if (g) {
                window['location']['href'] = 'https://hiring.amazon.ca/app#/contactInformation', await f();
                let M = null;
                const N = document['querySelector']('input[data-test-id=\x22input-test-id-emailId\x22]');
                N && N['value'] && (M = N['value'], window['location']['href'] = 'https://hiring.amazon.ca/app#/jobSearch');
                if (p)
                    !b && (b = setInterval(() => {
                        p ? B() : (clearInterval(b), b = null);
                    }, c));
                else {
                }
            } else {
            }
        }
    }
    function K() {
        b && (clearInterval(b), b = null);
    }
    chrome['runtime']['onMessage']['addListener'](function (M, N, O) {
        if (M['action'] == 'activate') {
            p = M['status'];
            if (p)
                A();
        }
        O(!![]);
    });
    const L = chrome['runtime']['connect']({ 'name': 'amazon-shifts-extension' });
    L['onMessage']['addListener'](async function (M) {
        if (M['action'] == 'fetch_info') {
            g = M['data']['$username'], h = M['data']['$password'], j = M['data']['$candidateID'], k = M['data']['$selectedCity'], l = M['data']['$lat'], m = M['data']['$lng'], n = M['data']['$distance'], o = M['data']['$jobType'], p = M['data']['$active'], $version = M['data']['$version'];
            if (p) {
                A();
                return;
            }
        }
    }), L['postMessage']({ 'action': 'fetch_info' });
}(location['pathname']));