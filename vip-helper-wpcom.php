<?php
/*
 *	VIP Helper Functions that are specific to WordPress.com
 *
 * These functions relate to WordPress.com specific plugins, 
 * filters, and actions that are enabled across all of WordPress.com.
 *
 * To add these functions to  your theme add
include( ABSPATH . '/wp-content/themes/vip/plugins/vip-helper-wpcom.php' );
 * in the theme's 'functions.php'. This should be wrapped in a 
if ( function_exists('wpcom_is_vip') ) { // WPCOM specific
 * so you don't load it in your local environment. This will help alert you if
 * have any unconditional dependencies on the WordPress.com environment.
 */

/*
 * Disable the WordPress.com filter that prevents orphans in titles
 * http://en.blog.wordpress.com/2006/12/24/no-orphans-in-titles/
 *
 * @author mtdewvirus
 */

function vip_allow_title_orphans() {
	remove_filter('the_title', 'widont');
}

/*
 * Only display related posts from own blog
 *
 * 1. Make sure Appearance -> Extras: 'Hide related links on this blog' is NOT checked
 * 2. Add  vip_related_posts() to functions.php 
 * 3. Add vip_display_related_posts() in the loop where you want them displayed
 *
 * @author mtdewvirus
 */

function vip_related_posts($before = '', $after = '') {
	remove_filter('the_content', 'sphere_inline');
	if ( !empty($before) ) add_filter('sphere_inline_before', returner($before));
	if ( !empty($after) ) add_filter('sphere_inline_after', returner($after));
}

function vip_display_related_posts( $limit_to_same_domain = true ) {
	echo sphere_inline('', $limit_to_same_domain);
}

/*
 * Allows users of contributor role to be able to upload media.
 * Contrib users still can't publish.
 * @author mdawaffe
 */

function vip_contrib_add_upload_cap() {
        add_action( 'init', '_vip_contrib_add_upload_cap');
}
function _vip_contrib_add_upload_cap() {
        global $wp_user_roles, $wp_roles, $current_user;

        if ( !is_admin() || !strpos($_SERVER['SERVER_NAME'], 'wordpress.com') )
                return; // only works on wp.com, not wp.org

        $wp_user_roles['contributor']['capabilities']['upload_files'] = true;
        $wp_roles = new WP_Roles;
        $id = $current_user->ID;
        unset( $GLOBALS['current_user'] );
        wp_set_current_user( $id );
}
