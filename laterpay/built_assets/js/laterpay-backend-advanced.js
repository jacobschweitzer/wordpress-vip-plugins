!function(n){n(function(){function t(){var t={showMerchantDashboard:n("#lp_js_showMerchantDashboard, #lp_js_showMerchantDashboardImage"),showButtonGenerator:n("#lp_js_showButtonGenerator, #lp_js_showButtonGeneratorImage"),navigation:n(".lp_navigation"),pluginDelete:n(".lp_js_disablePlugin"),pluginDeleteConfirm:n(".lp_js_disablePluginConfirm"),modalClose:n("button.lp_js_ga_cancel")},i=function(){t.showMerchantDashboard.bind("click",function(){return n(this).attr("href",n(this).data("href-"+lpVars.region)),!0}),t.showButtonGenerator.bind("click",function(){var t=lpVars.region;return"false"===lpVars.liveKeyAvailable&&(t="default"),n(this).attr("href",n(this).data("href-"+t)),!0}),t.pluginDelete.on("click",function(){"function"==typeof tb_show&&(tb_show(lpVars.modal.title,"#TB_inline?inlineId="+lpVars.modal.id+"&height=185&width=375"),n("div#TB_ajaxContent").css("padding","30px"))}),t.pluginDeleteConfirm.click(function(){n("#TB_closeWindowButton").click(),o()}),t.modalClose.click(function(){n("#TB_closeWindowButton").click()})},o=function(){var i={action:"laterpay_disable_plugin",security:lpVars.plugin_disable_nonce};n.post(ajaxurl,i,function(i){"string"===n.type(i)&&(i=JSON.parse(i)),t.navigation.showMessage(i),!1===i.is_vip?setTimeout(function(){window.location.replace(lpVars.pluginsUrl)},2e3):setTimeout(function(){window.location.reload()},2e3)})},e=function(){i()};e()}t()})}(jQuery);