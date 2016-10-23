# smajax
JQuery-based api configurable ajax package.

## Installation

```js
<script src="smajax.min.js"> </script>
```
you must have jquery(Any version).

```js
<script src="juqery.min.xxxx.js"> </script>
```

## Usage

- Init request.

```js
var SmartAJAX = new myajax({ dataType: 'json' });
```

- POST request.

```js
SmartAJAX.post('/url',{'obj':'list'},function(msg){
    console.log(msg);
});
```

- GET request.

```js
SmartAJAX.get('/url',function(msg){
    console.log(msg);
});
```


**Options:**

 - `async` - ajax async option true or false.(default:true)
 - `cache` - Whether the page needs to be cached, Use this feature Jquery must be greater than 1.2.(default:false)
 - `dataType` - Specifies the type of data returned.(default:`'html'`)
 - `loader` - Specifies the pre-action or set the animation before ajax is executed.(default: undefined)
 - `finish` - Specify the action to complete or provide ajax done after the completion of the act.(default: undefined)
 - `error` - Abnormal action specified or specified ajax do abnormal behavior.(default: undefined)
 - `contentType` - Specifies the content type of the request.(default: undefined)
 - `timeout` - Specifies the time-out for the request.(default: 5s)
