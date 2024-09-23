
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/polyfills.BqD-ScDQ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/app.BoQUGe5V.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/VaultedContact.B0O0dFYb.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DeliveryMethodSelectorSection.BF4Us1Oz.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useUnauthenticatedErrorModal.KS_XZm63.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/RageClickCapture.BVxhUk2e.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShopPayLogo.D98TigTK.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PurchaseOptionsAgreement.9AZShDif.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Option.CELkCpCD.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PickupPointCarrierLogo.7OWsIqop.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/hooks.ikdY8vlU.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/LegacyVaultedShippingMethods.CoXojpnI.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/OnePageModal.DGq8prej.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useShowShopPayOptin.Bvmj5DZL.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Rollup.DJEDI3Fz.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Section.CAPzd8fP.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/google-pay.B7DapUZh.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PayButtonSection.CqxCHMzP.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/context.B3zCfp3z.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/constants.CfAKy6vR.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ButtonWithRegisterWebPixel.D2ngZ5fi.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/NoAddressLocationFullDetour.Dv-uSUua.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/publishMessage.CWJTT43i.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DutyOptions.CsQJ9-m3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/SubscriptionPriceBreakdown.D4jFdQb6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/StockProblemsLineItemList.x0BRAD6G.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/component-ShopPayVerificationSwitch.SPzykPD5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/index.BCKGU95g.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/app.CKqwWV0E.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/VaultedContact.CxMuAABI.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/DeliveryMethodSelectorSection.CElxpDlW.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/RageClickCapture.DnkQ4tsk.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ShopPayLogo.D_HPU8Dh.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/Option.BgrbqXV7.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/PickupPointCarrierLogo.C0wRU6wV.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/LegacyVaultedShippingMethods.-UsM8FFz.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/Rollup.o9Mx-fKL.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/Section.sQehCocD.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/google-pay.D-Ox6Dnf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/PayButtonSection.DF7trkKf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ButtonWithRegisterWebPixel.B6bwbcOx.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/NoAddressLocationFullDetour.DU8rC2PR.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/DutyOptions.Bd1Z60K2.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/SubscriptionPriceBreakdown.Bqs0s4oM.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/StockProblemsLineItemList.CxdIQKjw.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ShopPayVerificationSwitch.CAxiAssW.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0586/3270/0077/files/2021727-164224_x320.png?v=1627398393"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  