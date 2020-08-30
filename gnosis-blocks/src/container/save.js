import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/editor';

export default function Save( {className} ) {
	return (
		<section class={className}>
			<div class="container">
				<InnerBlocks.Content />
			</div>
		</section>
	);
}
