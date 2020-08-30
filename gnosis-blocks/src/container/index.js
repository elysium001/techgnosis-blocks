import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import './style.scss';
import Edit from './edit';
import Save from './save';

registerBlockType( 'create-block/gnosis-container-block', {
	title: __( 'Container Block', 'create-block' ),
	description: __(
		'This block',
		'create-block'
	),
	attributes: {
		size: {
			type: 'string'
		}
	},
	category: 'widgets',
	icon: 'smiley',
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},
	edit: Edit,
	save: Save,
} );
