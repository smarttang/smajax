/**
 * @github: https://github.com/smarttang/smajax
 * @author [smarttang]
 * @date [2016.10.23]
 * @return {[type]} [description]
 */
var smajax;

(function() {
	smajax = function(obj) {
			if (obj.async == undefined) {
				this.async = true;
			} else {
				this.async = obj.async;
			}

			if (obj.cache == undefined) {
				this.cache = false;
			} else {
				this.cache = obj.cache;
			}
			if (obj.dataType == undefined) {
				this.dataType = 'html';
			} else {
				this.dataType = obj.dataType;
			}

			if (obj.timeout == undefined) {
				this.timeout = 5000;
			} else {
				this.timeout = obj.timeout;
			}
			// 拼装
			this.ajaxOption = {
				cache: this.cache,
				async: this.async,
				dataType: this.dataType,
				timeout: this.timeout
			}

			if (obj.loader != undefined && typeof(obj.loader) == "function") {
				this.ajaxOption.beforeSend = obj.loader;
			}

			if (obj.finish != undefined && typeof(obj.loader) == "function") {
				this.ajaxOption.complete = obj.finish;
			}

			if (obj.error != undefined && typeof(obj.loader) == "function") {
				this.ajaxOption.error = obj.error;
			}

			if (obj.contentType != undefined) {
				this.ajaxOption.contentType = obj.contentType;
			}
		}

	smajax.prototype.post = function(remoteurl, parames, success) {
		if (remoteurl != '' && remoteurl != undefined && parames != '' && parames != undefined) {
			this.ajaxOption.type = 'POST';
			this.ajaxOption.url = remoteurl;
			this.ajaxOption.data = parames;
			this.ajaxOption.success = success;
			$.ajax(this.ajaxOption);
		}
	};

	smajax.prototype.get = function(remoteurl, success) {
		if (remoteurl != '' && remoteurl != undefined) {
			this.ajaxOption.type = 'GET';
			this.ajaxOption.url = remoteurl;
			this.ajaxOption.success = success;
			$.ajax(this.ajaxOption);
		}
	};
})(jQuery);