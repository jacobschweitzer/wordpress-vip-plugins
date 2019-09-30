<?php
// Uncomment this line to enable VIP-specific index, by default it'll fallback to the global index.
// define( 'JETPACK_SEARCH_VIP_INDEX', true );

es_wp_query_load_adapter( 'jetpack-search' );

add_filter( 'option_jetpack_active_modules', 'vipgo_enable_jetpack_search_module', 9999 );
function vipgo_enable_jetpack_search_module( $modules ) {
	$modules = array_merge( $modules, [ 'search' ] );
	$modules = array_unique( $modules );
	return $modules;
}
