const command = {
    invite: {
        /* '$ ',
        'x@x/$ ',
        'root@x/$ ',
        'user@x/$ ',
        'daemon@x/$ ', */
        user: [
            'travail',
            'x',
            'root',
            'daemon',
        ],
        machine: [
            'x',
            '207.0.2.71',
            'x',
        ],
        pwd: [
            '/',
            '/home/',
            '/home/travail/',
            '/home/travail/Document/',
            '~/',
            '~/Document/',
            '~/Document/nodeProject/',
            '~/Document/nodeProject/app/',
            '~/Document/nodeProject/nodes-modules/',
            '~/Document/nodeProject/app/functions/',
            '/var/',
            '/var/www/',
            '/var/www/html/',
            '/var/www/html/tests/',
            '/var/www/html/new_project/',
            '/var/www/html/hello_project/',
            '.',
            './',
        ],
        branch: [
            '',
            '',
            '(master)',
            '(develop)',
            '(prod)',
            '(main)',
        ],
    },
    prefix: [
        '',
        'sudo ',
    ],
    command: [
        'git ',
        'rm ',
        ' ',
        'mv ',
        'cp ',
        'scp ',
        'ssh ',
        'su ',
        'nano ',
        'chown ',
        'chmod ',
        'cat ',
        '!! ',
        'ls ',
        'git ',
        'vue ',
        'quasar ',
        'vi ',
        'vim ',
        'src ',
        'docker ',
        'docker-compose '
    ],
    arg: [
        '',
        '',
        '',
        '',
        '~',
        '*',
        '-r',
        '-R',
        '-R 777 ',
        '-R 755 ',
        '-R rwx ',
        '-R +r ',
        '-R +x ',
        '',
        '-a',
        '-v',
        '--verbose',
        '-h',
        '--help',
        '-a',
        '-rf',
        'dev',
        'stop',
        'start',
        'status',
        'status',
        'status',
        'status -v',
        'ls -a ',
        'status --verbose',
    ],
    target: [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        'package.json',
        'module_function.js',
        'docker-compose.yml',
        'Dockerfile',
        'handler.php',
        'index.js',
        'README.md',
        'index.php',
        'main.scss',
        'index.js',
    ],
};

const res = {
    startLine: [
        {class: '', text: '',},
        {class: '', text: '',},
        {class: '', text: '',},
        {class: '', text: '',},
        {class: '', text: '',},
        {class: '', text: '',},
        {class: '', text: '',},
        {class: '', text: '',},
        {class: '', text: '',},
        {class: '', text: '',},
        {class: '', text: '',},
        {class: 'green', text: '[OK] ',},
        {class: 'green', text: '[SUCCES] ',},
        {class: 'red', text: '[ERROR] ',},
        {class: 'yellow', text: '[WARNING] ',},
        {class: 'blue', text: '[PROCESSUS] ',},
        {class: 'yellow', text: '[CONFLICT] ',},
    ],
    label: [
        '',
        '',
        'init ',
        'Error ',
        'scripting ',
        'print ',
        'copy ',
        'paste ',
        'test ',
        'found ',
        'incoming ',
        'for ',
        'let ',
        'find ',
        'wlo1: ',
    ],
    action: [
        '',
        '',
        '',
        '',
        '',
        '',
        '401 ',
        '505 ',
        'module ',
        'daemon ',
        'flags=4163 ',
        'Initframe ',
    ],
};

export { command, res };