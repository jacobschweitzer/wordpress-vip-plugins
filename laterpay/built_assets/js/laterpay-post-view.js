!function(e){e(function(){function t(){var t={body:e("body"),previewModePlaceholder:e("#lp_js_previewModePlaceholder"),previewModeContainer:"#lp_js_previewModeContainer",previewModeForm:"#lp_js_previewModeForm",previewModeToggle:"#lp_js_togglePreviewMode",previewModeInput:"#lp_js_previewModeInput",previewModeVisibilityForm:"#lp_js_previewModeVisibilityForm",previewModeVisibilityToggle:"#lp_js_togglePreviewModeVisibility",previewModeVisibilityInput:"#lp_js_previewModeVisibilityInput",optionContainer:".lp_purchase-overlay-option",optionInput:".lp_purchase-overlay-option__input",submitButtonText:".lp_purchase-overlay__submit-text",timePass:".lp_js_timePass",flipTimePassLink:".lp_js_flipTimePass",timePassPreviewPrice:".lp_js_timePassPreviewPrice",voucherCodeWrapper:"#lp_js_voucherCodeWrapper",voucherCodeInput:".lp_js_voucherCodeInput",voucherRedeemButton:".lp_js_voucherRedeemButton",giftCardRedeemButton:".lp_js_giftCardRedeemButton",giftCardCodeInput:".lp_js_giftCardCodeInput",giftCardWrapper:"#lp_js_giftCardWrapper",giftCardActionsPlaceholder:".lp_js_giftCardActionsPlaceholder",giftsWrapper:e(".lp_js_giftsWrapper"),subscription:".lp_js_subscription",flipSubscriptionLink:".lp_js_flipSubscription",postContentPlaceholder:e("#lp_js_postContentPlaceholder"),purchaseLink:".lp_js_doPurchase",purchaseOverlay:".lp_js_overlayPurchase",currentOverlay:'input[name="lp_purchase-overlay-option"]:checked',hidden:"lp_is-hidden",fadingOut:"lp_is-fading-out",premiumBox:".lp_js_premium-file-box",redeemVoucherBlock:e(".lp_purchase-overlay__voucher"),notificationButtons:e(".lp_js_notificationButtons"),notificationCancel:e(".lp_js_notificationCancel"),voucherCancel:".lp_js_voucherCancel",redeemVoucherButton:".lp_js_redeemVoucher",overlayMessageContainer:".lp_js_purchaseOverlayMessageContainer",overlayTimePassPrice:".lp_js_timePassPrice",lp_ga_element:e("#lp_ga_tracking"),lp_already_bought:".lp_bought_notification"},a=function(t){var a=e("<div/>",{id:"lp_js_voucherCodeFeedbackMessage","class":"lp_voucher__feedback-message",style:"display:none;"}).text(t);return a},i=function(t){var a=e("<div/>",{id:"lp_js_voucherCodeFeedbackMessage","class":"lp_purchase-overlay__voucher-error"}).text(t);return a},n=function(){t.previewModeContainer=e("#lp_js_previewModeContainer"),t.previewModeForm=e("#lp_js_previewModeForm"),t.previewModeToggle=e("#lp_js_togglePreviewMode"),t.previewModeInput=e("#lp_js_previewModeInput"),t.previewModeVisibilityForm=e("#lp_js_previewModeVisibilityForm"),t.previewModeVisibilityToggle=e("#lp_js_togglePreviewModeVisibility"),t.previewModeVisibilityInput=e("#lp_js_previewModeVisibilityInput")},o=function(){t.previewModeToggle.on("change",function(){f()}),t.previewModeVisibilityToggle.on("mousedown",function(){g()}).on("click",function(e){e.preventDefault()})},r=function(){t.body.on("mousedown",t.purchaseLink,function(){y(this)}).on("click",t.purchaseLink,function(t){t.preventDefault(),e(this).data("preview-post-as-visitor")?alert(lpVars.i18n.alert):(M("Paid Content Purchase"),window.location.href=e(this).data("laterpay"))}),t.body.on("mousedown",t.purchaseOverlay,function(){y(this)}).on("click",t.purchaseOverlay,function(t){t.preventDefault(),e(this).data("preview-post-as-visitor")?alert(lpVars.i18n.alert):(M("Paid Content Purchase"),s(e(this).attr("data-purchase-action")))}),t.body.on("click",t.optionContainer,function(a){switch(a.preventDefault(),e(this).find(t.optionInput).attr("checked","checked"),e(this).data("revenue")){case"sis":e(t.submitButtonText).text(lpVars.i18n.revenue.sis);break;case"sub":e(t.submitButtonText).text(lpVars.i18n.revenue.sub);break;case"ppu":default:e(t.submitButtonText).text(lpVars.i18n.revenue.ppu)}}),t.body.on("click",t.redeemVoucherButton,function(a){a.preventDefault(),t.redeemVoucherBlock.removeClass("lp_hidden"),t.notificationButtons.addClass("lp_hidden"),t.notificationCancel.removeClass("lp_hidden"),e(t.purchaseOverlay).find('[data-buy-label="true"]').addClass("lp_hidden"),e(t.purchaseOverlay).find('[data-voucher-label="true"]').removeClass("lp_hidden"),e(t.purchaseOverlay).attr("data-purchase-action","voucher")}),t.body.on("click",t.voucherCancel,function(a){a.preventDefault(),t.redeemVoucherBlock.addClass("lp_hidden"),t.notificationButtons.removeClass("lp_hidden"),t.notificationCancel.addClass("lp_hidden"),e(t.purchaseOverlay).find('[data-buy-label="true"]').removeClass("lp_hidden"),e(t.purchaseOverlay).find('[data-voucher-label="true"]').addClass("lp_hidden"),e(t.purchaseOverlay).attr("data-purchase-action","buy")}),t.body.on("click",t.flipTimePassLink,function(e){e.preventDefault(),w(this)}),t.body.on("click",t.flipSubscriptionLink,function(e){e.preventDefault(),w(this)})},l=function(){t.body.on("click",t.lp_already_bought,function(t){t.preventDefault(),M("Paid Content Identify"),window.location.href=e(this).attr("href")})},s=function(a){return"buy"===a&&(window.location.href=e(t.currentOverlay).val()),"voucher"===a&&(e(t.overlayMessageContainer).html(""),c(e(t.overlayMessageContainer),i,t.voucherCodeInput,"purchase-overlay",!1)),!1},p=function(){e(t.voucherRedeemButton).on("mousedown",function(){c(e(this).parent(),a,t.voucherCodeInput,"time-pass",!1)}).on("click",function(e){e.preventDefault()}),e(t.giftCardRedeemButton).on("mousedown",function(){c(e(this).parent(),a,t.giftCardCodeInput,"time-pass",!0)}).on("click",function(e){e.preventDefault()})},c=function(a,i,n,o,r){var l=e(n).val();6===l.length?e.get(lpVars.ajaxUrl,{action:"laterpay_redeem_voucher_code",code:l,link:window.location.href},function(s){if(e(n).val(""),s.success)if(r)e("#fakebtn").attr("data-laterpay",s.url).click();else{var p,c,u=!1;"time_pass"===s.type&&e(t.timePass).each(function(){if(p=e(this).data("pass-id"),p===s.pass_id)return u=!0,!1}),"subscription"===s.type&&e(t.subscription).each(function(){if(c=e(this).data("sub-id"),c===s.sub_id)return u=!0,!1}),u?window.location.href=s.url:d(l+lpVars.i18n.invalidVoucher,i,o,a)}else d(l+lpVars.i18n.invalidVoucher,i,o,a)},"json"):d(lpVars.i18n.codeTooShort,i,o,a)},d=function(t,a,i,n){var o=a(t);"purchase-overlay"===i&&n.empty().append(o),"time-pass"===i&&(n.prepend(o),o=e("#lp_js_voucherCodeFeedbackMessage",n),o.fadeIn(250).click(function(){u(o)}),setTimeout(function(){u(o)},3e3))},u=function(e){e.fadeOut(250,function(){e.unbind().remove()})},_=function(){var a=[],i=t.giftsWrapper;e.each(i,function(t){a.push(e(i[t]).data("id"))}),e.get(lpVars.ajaxUrl,{action:"laterpay_get_gift_card_actions",pass_id:a,link:window.location.href},function(a){a.data&&(e.each(a.data,function(i){var n=a.data[i],o=e(t.giftCardActionsPlaceholder+"_"+n.id);o.empty().append(n.html),n.buy_more&&e(n.buy_more).appendTo(o.parent()).attr("href",window.location.href)}),b("laterpay_purchased_gift_card"))},"json")},v=function(){var a=[],i=[],n=e(t.premiumBox);e.each(n,function(t){a.push(e(n[t]).data("post-id")),i.push(e(n[t]).data("content-type"))}),e.ajax({url:lpVars.ajaxUrl,method:"GET",data:{action:"laterpay_get_premium_shortcode_link",ids:a,types:i,post_id:lpVars.post_id},xhrFields:{withCredentials:!0},dataType:"json"}).done(function(t){if(t.data){var a=null;e.each(t.data,function(i){a=t.data[i],e.each(n,function(t){e(n[t]).data("post-id").toString()===i&&e(n[t]).prepend(a)})})}m()})},h=function(){e.ajax({url:lpVars.ajaxUrl,method:"GET",data:{action:"laterpay_preview_mode_render",post_id:lpVars.post_id},xhrFields:{withCredentials:!0}}).done(function(e){e&&(t.previewModePlaceholder.before(e).remove(),n(),o())})},f=function(){t.previewModeToggle.prop("checked")?t.previewModeInput.val(1):t.previewModeInput.val(0),e.ajax({url:lpVars.ajaxUrl,method:"POST",data:t.previewModeForm.serializeArray(),xhrFields:{withCredentials:!0}}).done(function(){window.location.reload()})},g=function(){var a=t.previewModeContainer.hasClass(t.hidden)?"0":"1";t.previewModeVisibilityInput.val(a),t.previewModeContainer.toggleClass(t.hidden),e.ajax({url:lpVars.ajaxUrl,method:"POST",data:t.previewModeVisibilityForm.serializeArray(),xhrFields:{withCredentials:!0}})},y=function(t){e(t).data("preview-as-visitor")&&!e(t).data("is-in-visible-test-mode")&&alert(lpVars.i18n.alert)},m=function(){var e=C("laterpay_download_attached");e&&(b("laterpay_download_attached"),window.location.href=e)},w=function(t){e(t).parents(".lp_time-pass").toggleClass("lp_is-flipped")},b=function(e){document.cookie=e+"=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/"},C=function(e){var t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0},P=function(e){if(!0===e)return function(e,t,a,i,n,o,r){e.GoogleAnalyticsObject=n,e[n]=e[n]||function(){(e[n].q=e[n].q||[]).push(arguments)},e[n].l=1*new Date,o=t.createElement(a),r=t.getElementsByTagName(a)[0],o.async=1,o.src=i,r.parentNode.insertBefore(o,r)}(window,document,"script","https://www.google-analytics.com/analytics.js","lpga"),window[window.GoogleAnalyticsObject||"lpga"]},j=function(e,t,a){var i=P(e);"function"==typeof i&&(i("create",lpVars.gaData.lp_tracking_id,"auto","lpParentTracker"),i("lpParentTracker.send","event",{eventCategory:"LaterPay WordPress Plugin",eventAction:a,eventLabel:t}))},k=function(e,t,a){var i=P(e);"function"==typeof i&&(i("create",lpVars.gaData.lp_user_tracking_id,"auto","lpUserTracker"),i("lpUserTracker.send","event",{eventCategory:"LaterPay WordPress Plugin",eventAction:a,eventLabel:t}))},M=function(e){var t=lpVars.gaData.postTitle+","+lpVars.gaData.blogName+","+lpVars.gaData.postPermalink,a=!1,i=T(),n="",o=lpVars.gaData.lp_user_tracking_id,r=lpVars.gaData.lp_tracking_id;o.length>0&&r.length>0?"function"==typeof i?(n=i.getAll(),n.forEach(function(n){if(o===n.get("trackingId")){a=!0;var r=n.get("name");i(r+".send","event",{eventCategory:"LaterPay WordPress Plugin",eventAction:e,eventLabel:t})}}),!0===a?x(r,"lpParentTracker",e,t):(x(i,r,"lpParentTracker",e,t),x(i,o,"lpUserTracker",e,t))):(j(!0,t,e),k(!0,t,e)):o.length>0&&0===r.length?"function"==typeof i?(n=i.getAll(),n.forEach(function(n){if(o===n.get("trackingId")){a=!0;var r=n.get("name");i(r+".send","event",{eventCategory:"LaterPay WordPress Plugin",eventAction:e,eventLabel:t})}}),!0!==a&&k(!0,t,e)):k(!0,t,e):0===o.length&&r.length>0&&("function"==typeof i?x(i,r,"lpParentTracker",e,t):j(!0,t,e))},V=function(){"1"===C("lp_ga_purchased")&&(M("Paid Content Purchase Complete"),b("lp_ga_purchased"))},T=function(){if("boolean"==typeof window.mi_track_user&&!0===window.mi_trac_user)return window[window.GoogleAnalyticsObject||"__gaTracker"]},x=function(e,t,a,i,n){e("create",t,"auto",a),e(a+".send","event",{eventCategory:"LaterPay WordPress Plugin",eventAction:i,eventLabel:n})},I=function(){1===t.previewModePlaceholder.length&&h(),t.giftsWrapper.length>=1&&_(),e(t.premiumBox).length>=1&&v(),V(),e(t.lp_ga_element).length>=1&&M("Paid Content Replacement Show"),r(),p(),l()};I()}t()})}(jQuery);