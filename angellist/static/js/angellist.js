var angellist={version:"1.2",page_visible:false,container_visible:false,container_offset_top:0,visibility_init:function(){var hidden=null;var event=null;if(document.hidden!==undefined){hidden="hidden";event="visibilitychange"}else{if(document.webkitHidden!==undefined){hidden="webkitHidden";event="webkitvisibilitychange"}else{if(document.msHidden!==undefined){hidden="msHidden";event="msvisibilitychange"}}}var container_offset=angellist.container.offset();if(container_offset.top>0){angellist.container_offset_top=container_offset.top}container_offset=null;if(hidden===null||document[hidden]===false){angellist.page_visible=true;if(angellist.viewport_test()===false){jQuery(window).scroll(angellist.viewport_test)}else{angellist.on_visible()}}else{jQuery(document).bind(event,{hidden:hidden},angellist.visiblity_change)}},visibility_change:function(event){if(angellist.page_visible===true){return}if(document[event.data.hidden]===false){angellist.page_visible=true;jQuery(document).unbind(event);if(angellist.viewport_test()===false){jQuery(window).scroll(angellist.viewport_test)}else{angellist.on_visible()}}},viewport_test:function(){if(angellist.container_visible===true){return true}var jwindow=jQuery(window);if((jwindow.height()+jwindow.scrollTop())>=angellist.container_offset_top){jQuery(window).unbind("scroll",angellist.viewport_test);angellist.container_visible=true;angellist.on_visible();return true}return false},on_visible:function(){angellist.lazy_load_images()},lazy_load_images:function(){if(angellist.container===undefined||angellist.container.length===0){return}angellist.container.find("noscript.img").each(function(){var noscript=jQuery(this);var html=jQuery(noscript.data("html"));if(html.length>0){noscript.replaceWith(html)}noscript=html=null})},enable:function(){angellist.container=jQuery("#angellist-companies");if(angellist.container.length===0){delete angellist.container;return}angellist.visibility_init()}};jQuery(function(){angellist.enable()});