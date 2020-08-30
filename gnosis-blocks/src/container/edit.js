import { __ } from '@wordpress/i18n';
import { BaseControl, SelectControl  } from '@wordpress/components';
import { InnerBlocks } from '@wordpress/editor';

import './editor.scss';

export default function Edit( { className, attributes: { size }, setAttributes } ) {
	return (
		<>
		<BaseControl
			id="skeleton-container"
			label="Container Block"
			help="Useful with the full-width template. Just add anywhere you want your elements to justify center."
		>
			<InnerBlocks />
		</BaseControl>

		</>
	);
}
