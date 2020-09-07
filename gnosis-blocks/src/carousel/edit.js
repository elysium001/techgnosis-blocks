import { __ } from '@wordpress/i18n';
import { BaseControl, SelectControl  } from '@wordpress/components';
import { InnerBlocks } from '@wordpress/editor';

import './editor.scss';

const ALLOWED_BLOCKS = [ 'gnosis-block/carousel-slide' ];
const TEMPLATE = [[ 'gnosis-block/carousel-slide', {} ]];

export default function Edit( { className } ) {
	return (
		<>
		<BaseControl
			id="owl-carousel"
			label="Carousel Block"
		>
			<InnerBlocks 
				allowedBlocks={ ALLOWED_BLOCKS }
				template={TEMPLATE}/>
		</BaseControl>

		</>
	);
}
