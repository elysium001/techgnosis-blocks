<?php

class TechGBlocks {

	private static $initiated = false;
	
	public static function init() {
		if ( ! self::$initiated ) {
            self::init_hooks();
		}
	}

	/**
	 * Initializes WordPress hooks
	 */
	private static function init_hooks() {
		self::$initiated = true;
        add_action( 'wp_enqueue_scripts', array( 'TechGBlocks', 'techgnosis_block_theme_scripts' ) );
        self::create_block_gnosis_container_block_block_init();
    }
    
    /**
     * Enqueue scripts and styles.
     */
    function techgnosis_block_theme_scripts() {
        wp_enqueue_style( 'google_fonts', '//fonts.googleapis.com/css?family=Raleway:400,300,600', false );
        wp_enqueue_style( 'owl', TECHGBLOCKS__PLUGIN_URL . '/assets/OwlCarousel2-2.3.4/dist/assets/owl.carousel.min.css', false );
        wp_enqueue_style( 'owl-theme', TECHGBLOCKS__PLUGIN_URL . '/assets/OwlCarousel2-2.3.4/dist/assets/owl.theme.default.min.css' );
        wp_enqueue_style( 'skeleton', TECHGBLOCKS__PLUGIN_URL . 'assets/Skeleton-2.0.4/css/skeleton.css', array(), '2.0.4' );
        wp_enqueue_script(
            'main-tech',
            plugins_url( 'assets/main.js', __FILE__ ),
            ['jquery'],
            '23',
            true
        );
        wp_enqueue_script(
            'owl',
            plugins_url( 'assets/OwlCarousel2-2.3.4/dist/owl.carousel.min.js', __FILE__ ),
            ['jquery'],
            '2',
            true
        );
    }

    static function create_block_gnosis_container_block_block_init() {
        $dir = TECHGBLOCKS__PLUGIN_DIR . 'gnosis-blocks';
    
        $script_asset_path = "$dir/build/index.asset.php";
        if ( ! file_exists( $script_asset_path ) ) {
            throw new Error(
                'You need to run `npm start` or `npm run build` for the "create-block/gnosis-container-block" block first.'
            );
        }
        
        $index_js     = 'gnosis-blocks/build/index.js';
        $script_asset = require( $script_asset_path );
        wp_register_script(
            'gnosis-blocks-editor',
            plugins_url( $index_js, __FILE__ ),
            $script_asset['dependencies'],
            $script_asset['version']
        );
    
        $editor_css = 'build/index.css';
        wp_register_style(
            'gnosis-blocks-editor',
            plugins_url( $editor_css, __FILE__ ),
            array(),
            filemtime( "$dir/$editor_css" )
        );
    
        $style_css = 'build/style-index.css';
        wp_register_style(
            'gnosis-blocks',
            plugins_url( $style_css, __FILE__ ),
            array(),
            filemtime( "$dir/$style_css" )
        );
    
        register_block_type( 'create-block/gnosis-block', array(
            'editor_script' => 'gnosis-blocks-editor',
            'editor_style'  => 'gnosis-blocks-editor',
            'style'         => 'gnosis-blocks',
        ) );
    }

}