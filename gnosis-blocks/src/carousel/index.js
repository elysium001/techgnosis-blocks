import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import './style.scss';
import Edit from './edit';
import Save from './save';

registerBlockType( 'gnosis-block/carousel', {
	title: __( 'Carousel Block', 'gnosis-block' ),
	description: __(
		'This block',
		'gnosis-block'
	),
	category: 'widgets',
	icon: 'smiley',
	edit: Edit,
	save: Save,
} );
