export default {
    title: 'Liens/Boutons',
    argTypes: {
        label: {
            name: 'text',
            type: {name: 'string', required: true},
            defaultValue: 'Bouton',
            control: 'text',
            description: 'Label du bouton',
            table: {
                type: {summary: 'string'},
            },
        },
        color: {
            name: 'color',
            type: {name: 'string'},
            defaultValue: null,
            description: 'Couleur du bouton',
            control: {
                type: 'select',
                options: ['', 'btn-primary', 'btn-secondary', 'btn-accent', 'btn-ghost', 'btn-link'],
            },
            table: {
                type: {summary: 'string'},
                defaultValue: null
            },
        },
        size: {
            name: 'size',
            type: {name: 'string'},
            defaultValue: null,
            description: 'Taille du bouton',
            control: {
                type: 'select',
                options: ['', 'btn-sm', 'btn-xs', 'btn-lg'],
            },
            table: {
                type: {summary: 'string'},
                defaultValue: null
            },
        },
        title: {
            name: 'title',
            type: {name: 'string'},
            defaultValue: 'Titre du lien',
            control: 'text',
            description: 'Titre du lien',
            table: {
                type: {summary: 'string'},
            },
        },
        href: {
            name: 'href',
            type: {name: 'string'},
            defaultValue: 'https://google.fr',
            control: 'text',
            description: 'Url du lien',
            table: {
                type: {summary: 'string'},
            },
        },
        target: {
            name: 'target',
            type: {name: 'string'},
            control: {
                type: 'select',
                options: ['', '_blank'],
            },            description: 'Comportement du lien',
            table: {
                type: {summary: 'string'},
            },
        }
    },
};

const Template = ({label, color, size, href, title, target}) => {
    return `<a href="${href}" title="${title}" target="${target}" class="btn ${color} ${size}">${label}</a>`;
};

export const Base = Template.bind({});
Base.args = {
    label: 'Bouton',
    color: '',
    size: '',
    href: 'https://google.fr',
    title: 'Titre du lien',
    target: '_blank'
};

export const LargePrimary = Template.bind({});
LargePrimary.args = {
    label: 'Bouton',
    color: 'btn-primary',
    size: 'btn-lg',
    href: 'https://google.fr',
    title: 'Titre du lien',
    target: '_blank'
};

export const LittleGhost = Template.bind({});
LittleGhost.args = {
    label: 'Bouton',
    color: 'btn-ghost',
    size: 'btn-xs',
    href: 'https://google.fr',
    title: 'Titre du lien',
    target: '_blank'
};

