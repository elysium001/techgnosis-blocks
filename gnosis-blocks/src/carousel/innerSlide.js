import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/editor';
import { __ } from '@wordpress/i18n';

const ALLOWED_BLOCKS2 = [ 'core/cover' ];
const TEMPLATE2 = [ ['core/cover', {}] ];

registerBlockType( 'gnosis-block/carousel-slide', {
	title: __( 'Slide Block', 'gnosis-block' ),
	description: __(
		'This block',
		'gnosis-block'
	),
	category: 'widgets',
	icon: 'smiley',
	edit: function( ) {
		return (
			<div>
				<InnerBlocks
					renderAppender={false}
					allowedBlocks={ ALLOWED_BLOCKS2 }
					template={ TEMPLATE2 } />
			</div>
		);
	},
	save: function() {
		return (
			<div class="item">
				<InnerBlocks.Content />
			</div>
		);
	}
} );
