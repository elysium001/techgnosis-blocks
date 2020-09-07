import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/editor';

export default function Save( {className} ) {
	return (
		<div className={className}>
			<div class='owl-carousel owl-theme'>
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
