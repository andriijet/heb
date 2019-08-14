<?php
/**
 * Plugin Name: Hover Effects Builder
 * Description: Create your own hover effects using build-in Editor and apply them to the images on your website without any CSS coding knowledge.
 * Plugin URI: http://codecanyon.net/item/hover-effects-builder-wordpress-plugin/10932318
 * Version: 1.1.0
 * Author: SeaWebster
 * Author URI: http://seawebster.com/
 * License: 
 */
	defined('ABSPATH') or die("No script kiddies please!");

	// define plugin version
	define( 'HI_VERSION', '1.1.0' );

	// plugin author
	define( 'HI_AUTHOR', 'SeaWebster' );

	// plugin author site
	define( 'HI_AUTHOR_SITE', 'http://seawebster.com/' );

	// plugin codecanyon link
	define( 'HI_PLUGIN_CC', 'http://codecanyon.net/item/hover-effects-builder-wordpress-plugin/10932318' );

	// changelog file
	define( 'HI_XML_FILE', HI_AUTHOR_SITE . 'updates/hover-effects-builder.xml' );

	// define plugin URL
	define( 'HI_URL', plugin_dir_url( __FILE__ ) );

	// define plugin PATH
	define( 'HI_PATH', plugin_dir_path( __FILE__ ) );

	// define plugin options prefix
	define( 'HI_ASSIGNS', 'hi_assigns' );
	define( 'HI_TEMPLATES', 'hi_templates' );
	define( 'HI_UPDATES', 'hi_updates' );

	if( ! defined( 'HI_ACCESS' ) )
	{
		define( 'HI_ACCESS', 'administrator' );
	}

    if( ! defined( 'HIF_VERSION' ) )
    {
        // define is admin
        define( 'HI_ADMIN', is_admin() );

        // load translations
        load_plugin_textdomain( 'hitd' , false, HI_PATH . 'languages' );

        // include functions
        include_once( HI_PATH . 'functions/functions-init.php' );
        include_once( HI_PATH . 'functions/functions-options.php' );
        include_once( HI_PATH . 'functions/functions-makestyle.php' );
        include_once( HI_PATH . 'functions/functions-theme.php' );
        include_once( HI_PATH . 'functions/functions-update.php' );

        // Divi fixes
        include_once( HI_PATH . '_divi.php' );

        //include_once( HI_PATH . 'functions/functions-compatibility.php' );

        include_once( HI_PATH . 'functions/extension/vc/vc-image-ext/vc_extend.php' );
        include_once( HI_PATH . 'functions/extension/tinymce/tinymce.php' );

        // init admin interface
        if( HI_ADMIN )
        {
            hi_admin_hooks();
        }
        else
        {
            hi_frontend_hooks();
        }

        register_activation_hook( __FILE__, 'hi_builder_activate' );
    }