/* Failed to obfuscate: JAVA_UPPER_CASE */
bck2brwsr.register({
  'magic' : 'kaf\u010do'
}, function(exports) {
  var vm = {};
  function link(n, assign) {
    function replaceAll(s, o, n) {
      var pos = 0;
      for (;;) {
         var indx = s.indexOf(o, pos);
         if (indx === -1) {
           return s;
         }
         pos = indx + n.length;
         s = s.substring(0, indx) + n + s.substring(indx + o.length);
      }
    }
    return function() {
      var no_ = replaceAll(n, '_', '_1');
      var cls = replaceAll(no_, '/', '_');
      var dot = replaceAll(n, '/', '.');
      exports.loadClass(dot);
      assign(exports[cls]);
      return exports[cls](arguments);
    };
  };

  var invoker = {};
  function registerClass(vm, name, fn) {
    if (!vm[name]) vm[name] = fn;
    return vm[name];
  }
vm.java_lang_Object = link('java/lang/Object', function(f) { vm.java_lang_Object =  f; });
vm.java_lang_Class = link('java/lang/Class', function(f) { vm.java_lang_Class =  f; });
vm.java_lang_ArithmeticException = link('java/lang/ArithmeticException', function(f) { vm.java_lang_ArithmeticException =  f; });

function com_dukescript_api_javafx_beans_ActionDataEvent$1() {
  var m;
  var CLS = com_dukescript_api_javafx_beans_ActionDataEvent$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function com_dukescript_api_javafx_beans_ActionDataEvent$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_com_dukescript_api_javafx_beans_ActionDataEvent$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: com_dukescript_api_javafx_beans_ActionDataEvent$1fillInstOf });
    com_dukescript_api_javafx_beans_ActionDataEvent$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'com/dukescript/api/javafx/beans/ActionDataEvent$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 69664;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.com_dukescript_api_javafx_beans_ActionDataEvent$1 = com_dukescript_api_javafx_beans_ActionDataEvent$1;


function com_dukescript_api_javafx_beans_ActionDataEvent$Creator() {
  var m;
  var CLS = com_dukescript_api_javafx_beans_ActionDataEvent$Creator;
  if (!CLS.$class) {
    var pp = com_dukescript_impl_javafx_beans_ActionDataEventFactory(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_com_dukescript_impl_javafx_beans_ActionDataEventFactory || (refs_com_dukescript_impl_javafx_beans_ActionDataEventFactory = com_dukescript_impl_javafx_beans_ActionDataEventFactory(false))).constructor.cons__V.call(lcA0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.create__Lcom_dukescript_api_javafx_beans_ActionDataEvent_2Lcom_dukescript_impl_javafx_beans_ActionDataEventFactory$Convertor_2Lcom_dukescript_api_javafx_beans_FXBeanInfo$Provider_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = new com_dukescript_api_javafx_beans_ActionDataEvent;
(refs_com_dukescript_api_javafx_beans_ActionDataEvent || (refs_com_dukescript_api_javafx_beans_ActionDataEvent = com_dukescript_api_javafx_beans_ActionDataEvent(false))).constructor.cons__VLcom_dukescript_impl_javafx_beans_ActionDataEventFactory$Convertor_2Lcom_dukescript_api_javafx_beans_FXBeanInfo$Provider_2Ljava_lang_Object_2Ljava_lang_Object_2.call(stA0, lcA1, lcA2, lcA3, lcA3);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.none0__Lcom_dukescript_impl_javafx_beans_ActionDataEventFactory$Convertor_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.none__Lcom_dukescript_impl_javafx_beans_ActionDataEventFactory$Convertor_2();
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLcom_dukescript_api_javafx_beans_ActionDataEvent$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function com_dukescript_api_javafx_beans_ActionDataEvent$CreatorfillInstOf(x) {
        Object.defineProperty(x, '$instOf_com_dukescript_api_javafx_beans_ActionDataEvent$Creator', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: com_dukescript_api_javafx_beans_ActionDataEvent$CreatorfillInstOf });
    com_dukescript_api_javafx_beans_ActionDataEvent$CreatorfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'com/dukescript/api/javafx/beans/ActionDataEvent$Creator';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_com_dukescript_impl_javafx_beans_ActionDataEventFactory;
    var refs_com_dukescript_api_javafx_beans_ActionDataEvent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.com_dukescript_api_javafx_beans_ActionDataEvent$Creator = com_dukescript_api_javafx_beans_ActionDataEvent$Creator;


function com_dukescript_api_javafx_beans_ActionDataEvent() {
  var m;
  var CLS = com_dukescript_api_javafx_beans_ActionDataEvent;
  if (!CLS.$class) {
    var pp = vm.javafx_event_ActionEvent(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_FACTORY'] = null;
  m = c._FACTORY = function (v) {  if (arguments.length == 1) CLS['fld_FACTORY'] = v; return CLS['fld_FACTORY']; };
  m = c._model = function (v) {  if (arguments.length == 1) this['fld_com_dukescript_api_javafx_beans_ActionDataEvent_model'] = v; return this['fld_com_dukescript_api_javafx_beans_ActionDataEvent_model']; };
  m = c._conv = function (v) {  if (arguments.length == 1) this['fld_com_dukescript_api_javafx_beans_ActionDataEvent_conv'] = v; return this['fld_com_dukescript_api_javafx_beans_ActionDataEvent_conv']; };
  m = c._event = function (v) {  if (arguments.length == 1) this['fld_com_dukescript_api_javafx_beans_ActionDataEvent_event'] = v; return this['fld_com_dukescript_api_javafx_beans_ActionDataEvent_event']; };
    m = CLS.cons__VLcom_dukescript_api_javafx_beans_FXBeanInfo$Provider_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLcom_dukescript_impl_javafx_beans_ActionDataEventFactory$Convertor_2Lcom_dukescript_api_javafx_beans_FXBeanInfo$Provider_2Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, null, lcA1, lcA2, lcA3);
return;

};
CLS['cons__VLcom_dukescript_api_javafx_beans_FXBeanInfo$Provider_2Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLcom_dukescript_impl_javafx_beans_ActionDataEventFactory$Convertor_2Lcom_dukescript_api_javafx_beans_FXBeanInfo$Provider_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;
(refs_javafx_event_ActionEvent || (refs_javafx_event_ActionEvent = vm.javafx_event_ActionEvent(false))).constructor['cons__VLjava_lang_Object_2Ljavafx_event_EventTarget_2'].call(lcA0, lcA3, null);
lcA0['fld_com_dukescript_api_javafx_beans_ActionDataEvent_model'] = lcA2;
lcA0['fld_com_dukescript_api_javafx_beans_ActionDataEvent_conv'] = lcA1;
lcA0['fld_com_dukescript_api_javafx_beans_ActionDataEvent_event'] = lcA4;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.getProperty__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA1) !== ((refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class)) { gt = 33; break IF; }
var stA0 = c.conv__Lcom_dukescript_impl_javafx_beans_ActionDataEventFactory$Convertor_2.call(lcA0);
var stA1 = invoker.getFXBeanInfo__Lcom_dukescript_api_javafx_beans_FXBeanInfo_2(lcA0['fld_com_dukescript_api_javafx_beans_ActionDataEvent_model']);
var stA0 = stA0.toString__Ljava_lang_Object_2Lcom_dukescript_api_javafx_beans_FXBeanInfo_2Ljava_lang_Object_2Ljava_lang_String_2(stA1, lcA0['fld_com_dukescript_api_javafx_beans_ActionDataEvent_event'], lcA2);
var lcA3 = stA0;
{ gt = 71; break IF; }
    }
    X_33: for (;;) { IF: if (gt <= 33) {

var stI0 = invoker.isAssignableFrom__ZLjava_lang_Class_2((refs_java_lang_Number || (refs_java_lang_Number = vm.java_lang_Number(false))).constructor.$class,lcA1);
if ((stI0) == 0) { gt = 69; break IF; }
var stA0 = c.conv__Lcom_dukescript_impl_javafx_beans_ActionDataEventFactory$Convertor_2.call(lcA0);
var stA1 = invoker.getFXBeanInfo__Lcom_dukescript_api_javafx_beans_FXBeanInfo_2(lcA0['fld_com_dukescript_api_javafx_beans_ActionDataEvent_model']);
var stA0 = stA0.toNumber__Ljava_lang_Object_2Lcom_dukescript_api_javafx_beans_FXBeanInfo_2Ljava_lang_Object_2Ljava_lang_String_2(stA1, lcA0['fld_com_dukescript_api_javafx_beans_ActionDataEvent_event'], lcA2);
var lcA3 = stA0;
{ gt = 71; break IF; }
    }
    X_69: for (;;) { IF: if (gt <= 69) {

var lcA3 = null;
    }
    X_71: for (;;) { IF: if (gt <= 71) {

var stA0 = c.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA3);
return stA0;

    }
}}}}
};
c['getProperty__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getSource__Ljava_lang_Object_2Ljava_lang_Class_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = lcA1;var stA2 = invoker.getSource__Ljava_lang_Object_2(lcA0);
var stA0 = c.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2.call(stA0, stA1, stA2);
return stA0;

};
c['getSource__Ljava_lang_Object_2Ljava_lang_Class_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['isModel__ZLjava_lang_Class_2'](lcA1);
if ((stI0) == 0) { gt = 31; break IF; }
var stA0 = c.conv__Lcom_dukescript_impl_javafx_beans_ActionDataEventFactory$Convertor_2.call(lcA0);
var stA1 = invoker.getFXBeanInfo__Lcom_dukescript_api_javafx_beans_FXBeanInfo_2(lcA0['fld_com_dukescript_api_javafx_beans_ActionDataEvent_model']);
var stA0 = stA0.toModel__Ljava_lang_Object_2Lcom_dukescript_api_javafx_beans_FXBeanInfo_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1, lcA1, lcA2);
var lcA3 = stA0;
{ gt = 33; break IF; }
    }
    X_31: for (;;) { IF: if (gt <= 31) {

var lcA3 = lcA2;
    }
    X_33: for (;;) { IF: if (gt <= 33) {

var stA0 = c.conv__Lcom_dukescript_impl_javafx_beans_ActionDataEventFactory$Convertor_2.call(lcA0);
var stA0 = stA0.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA1, lcA3);
return stA0;

    }
}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.conv__Lcom_dukescript_impl_javafx_beans_ActionDataEventFactory$Convertor_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0['fld_com_dukescript_api_javafx_beans_ActionDataEvent_conv']) === null) { gt = 14; break IF; }
var stA0 = lcA0['fld_com_dukescript_api_javafx_beans_ActionDataEvent_conv'];{ gt = 20; break IF; }
    }
    X_14: for (;;) { IF: if (gt <= 14) {

var stA0 = c._FACTORY().none0__Lcom_dukescript_impl_javafx_beans_ActionDataEventFactory$Convertor_2();
    }
    X_20: for (;;) { IF: if (gt <= 20) {
return stA0;

    }
}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new com_dukescript_api_javafx_beans_ActionDataEvent$Creator;
(refs_com_dukescript_api_javafx_beans_ActionDataEvent$Creator || (refs_com_dukescript_api_javafx_beans_ActionDataEvent$Creator = com_dukescript_api_javafx_beans_ActionDataEvent$Creator(false))).constructor.cons__VLcom_dukescript_api_javafx_beans_ActionDataEvent$1_2.call(stA0, null);
c._FACTORY(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function com_dukescript_api_javafx_beans_ActionDataEventfillInstOf(x) {
        Object.defineProperty(x, '$instOf_com_dukescript_api_javafx_beans_ActionDataEvent', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: com_dukescript_api_javafx_beans_ActionDataEventfillInstOf });
    com_dukescript_api_javafx_beans_ActionDataEventfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'com/dukescript/api/javafx/beans/ActionDataEvent';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_javafx_event_ActionEvent;
    var refs_java_lang_String;
    var refs_java_lang_Number;
    var refs_net_java_html_json_Models;
    var refs_com_dukescript_api_javafx_beans_ActionDataEvent$Creator;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_com_dukescript_api_javafx_beans_ActionDataEvent_model'] = null;
    this['fld_com_dukescript_api_javafx_beans_ActionDataEvent_conv'] = null;
    this['fld_com_dukescript_api_javafx_beans_ActionDataEvent_event'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.com_dukescript_api_javafx_beans_ActionDataEvent = registerClass(exports,'com_dukescript_api_javafx_beans_ActionDataEvent',com_dukescript_api_javafx_beans_ActionDataEvent);

vm.net_java_html_json_Models = link('net/java/html/json/Models', function(f) { vm.net_java_html_json_Models =  f; });
vm.java_lang_Number = link('java/lang/Number', function(f) { vm.java_lang_Number =  f; });
vm.java_lang_String = link('java/lang/String', function(f) { vm.java_lang_String =  f; });
vm.javafx_event_ActionEvent = link('javafx/event/ActionEvent', function(f) { vm.javafx_event_ActionEvent =  f; });

function com_dukescript_impl_javafx_beans_ActionDataEventFactory() {
  var m;
  var CLS = com_dukescript_impl_javafx_beans_ActionDataEventFactory;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_INSTANCE'] = null;
  m = c._INSTANCE = function (v) {  if (arguments.length == 1) CLS['fld_INSTANCE'] = v; return CLS['fld_INSTANCE']; };
  CLS['fld_NONE'] = null;
  m = c._NONE = function (v) {  if (arguments.length == 1) CLS['fld_NONE'] = v; return CLS['fld_NONE']; };
  CLS['fld_$assertionsDisabled'] = 0;
  m = c._$assertionsDisabled = function (v) {  if (arguments.length == 1) CLS['fld_$assertionsDisabled'] = v; return CLS['fld_$assertionsDisabled']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((c._INSTANCE()) === null) { gt = 18; break IF; }
var stA0 = new vm.java_lang_IllegalStateException;
(refs_java_lang_IllegalStateException || (refs_java_lang_IllegalStateException = vm.java_lang_IllegalStateException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }
    }
    X_18: for (;;) { IF: if (gt <= 18) {

c._INSTANCE(lcA0);
return;

    }
}}
};
CLS['cons__V'] = m;

    m.access = 4;
    m.cls = CLS;
    m = c.create__Lcom_dukescript_api_javafx_beans_ActionDataEvent_2Lcom_dukescript_impl_javafx_beans_ActionDataEventFactory$Convertor_2Lcom_dukescript_api_javafx_beans_FXBeanInfo$Provider_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3, lcA4) {
};
    m.access = 1028;
    m.cls = CLS;
    m = c.none__Lcom_dukescript_impl_javafx_beans_ActionDataEventFactory$Convertor_2 = function() {
  var  lcA0 = this;
return c._NONE();

};
    m.access = 20;
    m.cls = CLS;
    m = c.newEvent__Lcom_dukescript_api_javafx_beans_ActionDataEvent_2Lcom_dukescript_impl_javafx_beans_ActionDataEventFactory$Convertor_2Lcom_dukescript_api_javafx_beans_FXBeanInfo$Provider_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA0, lcA1, lcA2, lcA3) {
var stA0 = c._INSTANCE().create__Lcom_dukescript_api_javafx_beans_ActionDataEvent_2Lcom_dukescript_impl_javafx_beans_ActionDataEventFactory$Convertor_2Lcom_dukescript_api_javafx_beans_FXBeanInfo$Provider_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0, lcA1, lcA2, lcA3);
return stA0;

};
    m.access = 9;
    m.cls = CLS;
    m = c.class__V = function() {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.desiredAssertionStatus__Z(c.constructor.$class);
if ((stI0) != 0) { gt = 12; break IF; }
var stI0 = 1;{ gt = 13; break IF; }
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stI0 = 0;    }
    X_13: for (;;) { IF: if (gt <= 13) {
c._$assertionsDisabled(stI0);
try {
var stA0 = invoker.getName__Ljava_lang_String_2((refs_com_dukescript_api_javafx_beans_ActionDataEvent || (refs_com_dukescript_api_javafx_beans_ActionDataEvent = com_dukescript_api_javafx_beans_ActionDataEvent(false))).constructor.$class);
var stI1 = 1;var stA2 = invoker.getClassLoader__Ljava_lang_ClassLoader_2((refs_com_dukescript_api_javafx_beans_ActionDataEvent || (refs_com_dukescript_api_javafx_beans_ActionDataEvent = com_dukescript_api_javafx_beans_ActionDataEvent(false))).constructor.$class);
var stA0 = (refs_java_lang_Class || (refs_java_lang_Class = vm.java_lang_Class(false)))['forName__Ljava_lang_Class_2Ljava_lang_String_2ZLjava_lang_ClassLoader_2'](stA0, stI1, stA2);
var lcA0 = stA0;
if ((c._$assertionsDisabled()) != 0) { gt = 51; break IF; }
if ((lcA0) === ((refs_com_dukescript_api_javafx_beans_ActionDataEvent || (refs_com_dukescript_api_javafx_beans_ActionDataEvent = com_dukescript_api_javafx_beans_ActionDataEvent(false))).constructor.$class)) { gt = 51; break IF; }
var stA0 = new vm.java_lang_AssertionError;
(refs_java_lang_AssertionError || (refs_java_lang_AssertionError = vm.java_lang_AssertionError(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_ClassNotFoundException']) {var stA0 = e;{ gt = 54; break IF; }}
throw e;
}    }
    X_51: for (;;) { IF: if (gt <= 51) {
{ gt = 64; break IF; }
    }
    X_54: for (;;) { IF: if (gt <= 54) {
var lcA0 = stA0;
var stA0 = new vm.java_lang_IllegalStateException;
(refs_java_lang_IllegalStateException || (refs_java_lang_IllegalStateException = vm.java_lang_IllegalStateException(false))).constructor['cons__VLjava_lang_Throwable_2'].call(stA0, lcA0);
{ var stA0 = stA0; throw stA0; }
    }
    X_64: for (;;) { IF: if (gt <= 64) {
var stA0 = new com_dukescript_impl_javafx_beans_ActionDataEventFactory$1;
(refs_com_dukescript_impl_javafx_beans_ActionDataEventFactory$1 || (refs_com_dukescript_impl_javafx_beans_ActionDataEventFactory$1 = com_dukescript_impl_javafx_beans_ActionDataEventFactory$1(false))).constructor.cons__V.call(stA0);
c._NONE(stA0);
return;

    }
}}}}}}
};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function com_dukescript_impl_javafx_beans_ActionDataEventFactoryfillInstOf(x) {
        Object.defineProperty(x, '$instOf_com_dukescript_impl_javafx_beans_ActionDataEventFactory', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: com_dukescript_impl_javafx_beans_ActionDataEventFactoryfillInstOf });
    com_dukescript_impl_javafx_beans_ActionDataEventFactoryfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'com/dukescript/impl/javafx/beans/ActionDataEventFactory';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1057;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_java_lang_IllegalStateException;
    var refs_com_dukescript_api_javafx_beans_ActionDataEvent;
    var refs_java_lang_Class;
    var refs_java_lang_AssertionError;
    var refs_com_dukescript_impl_javafx_beans_ActionDataEventFactory$1;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.com_dukescript_impl_javafx_beans_ActionDataEventFactory = com_dukescript_impl_javafx_beans_ActionDataEventFactory;


function com_dukescript_impl_javafx_beans_ActionDataEventFactory$1() {
  var m;
  var CLS = com_dukescript_impl_javafx_beans_ActionDataEventFactory$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
CLS['cons__V'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.toString__Ljava_lang_Object_2Lcom_dukescript_api_javafx_beans_FXBeanInfo_2Ljava_lang_Object_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
var stA0 = invoker.toString__Ljava_lang_String_2(lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.toNumber__Ljava_lang_Object_2Lcom_dukescript_api_javafx_beans_FXBeanInfo_2Ljava_lang_Object_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA2 != null && lcA2['$instOf_java_lang_Number'] ? 1 : 0;
if ((stI0) == 0) { gt = 11; break IF; }
var stA0 = lcA2;{ gt = 12; break IF; }
    }
    X_11: for (;;) { IF: if (gt <= 11) {

var stA0 = null;    }
    X_12: for (;;) { IF: if (gt <= 12) {
return stA0;

    }
}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.toModel__Ljava_lang_Object_2Lcom_dukescript_api_javafx_beans_FXBeanInfo_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.isInstance__ZLjava_lang_Object_2(lcA2,lcA3);
if ((stI0) == 0) { gt = 16; break IF; }
var stA0 = invoker.cast__Ljava_lang_Object_2Ljava_lang_Object_2(lcA2,lcA3);
{ gt = 17; break IF; }
    }
    X_16: for (;;) { IF: if (gt <= 16) {

var stA0 = null;    }
    X_17: for (;;) { IF: if (gt <= 17) {
return stA0;

    }
}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.isInstance__ZLjava_lang_Object_2(lcA1,lcA2);
if ((stI0) == 0) { gt = 16; break IF; }
var stA0 = invoker.cast__Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,lcA2);
{ gt = 17; break IF; }
    }
    X_16: for (;;) { IF: if (gt <= 16) {

var stA0 = null;    }
    X_17: for (;;) { IF: if (gt <= 17) {
return stA0;

    }
}}}
};
    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function com_dukescript_impl_javafx_beans_ActionDataEventFactory$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_com_dukescript_impl_javafx_beans_ActionDataEventFactory$1', { value : true });
      vm.com_dukescript_impl_javafx_beans_ActionDataEventFactory$Convertor(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: com_dukescript_impl_javafx_beans_ActionDataEventFactory$1fillInstOf });
    com_dukescript_impl_javafx_beans_ActionDataEventFactory$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'com/dukescript/impl/javafx/beans/ActionDataEventFactory$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        com_dukescript_impl_javafx_beans_ActionDataEventFactory$Convertor(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.com_dukescript_impl_javafx_beans_ActionDataEventFactory$1 = com_dukescript_impl_javafx_beans_ActionDataEventFactory$1;


function com_dukescript_impl_javafx_beans_ActionDataEventFactory$Convertor() {
  var m;
  var CLS = com_dukescript_impl_javafx_beans_ActionDataEventFactory$Convertor;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.toString__Ljava_lang_Object_2Lcom_dukescript_api_javafx_beans_FXBeanInfo_2Ljava_lang_Object_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3) {
};
    m.access = 1025;
    m.cls = CLS;
    m = c.toNumber__Ljava_lang_Object_2Lcom_dukescript_api_javafx_beans_FXBeanInfo_2Ljava_lang_Object_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3) {
};
    m.access = 1025;
    m.cls = CLS;
    m = c.toModel__Ljava_lang_Object_2Lcom_dukescript_api_javafx_beans_FXBeanInfo_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
};
    m.access = 1025;
    m.cls = CLS;
    m = c.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
};
    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function com_dukescript_impl_javafx_beans_ActionDataEventFactory$ConvertorfillInstOf(x) {
        Object.defineProperty(x, '$instOf_com_dukescript_impl_javafx_beans_ActionDataEventFactory$Convertor', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: com_dukescript_impl_javafx_beans_ActionDataEventFactory$ConvertorfillInstOf });
    com_dukescript_impl_javafx_beans_ActionDataEventFactory$ConvertorfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'com/dukescript/impl/javafx/beans/ActionDataEventFactory$Convertor';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1537;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.com_dukescript_impl_javafx_beans_ActionDataEventFactory$Convertor = com_dukescript_impl_javafx_beans_ActionDataEventFactory$Convertor;

vm.java_lang_ClassNotFoundException = link('java/lang/ClassNotFoundException', function(f) { vm.java_lang_ClassNotFoundException =  f; });
vm.java_lang_AssertionError = link('java/lang/AssertionError', function(f) { vm.java_lang_AssertionError =  f; });
vm.java_lang_IllegalStateException = link('java/lang/IllegalStateException', function(f) { vm.java_lang_IllegalStateException =  f; });

function com_dukescript_api_javafx_beans_DelegateEventHandlerProperty() {
  var m;
  var CLS = com_dukescript_api_javafx_beans_DelegateEventHandlerProperty;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._p = function (v) {  if (arguments.length == 1) this['fld_com_dukescript_api_javafx_beans_DelegateEventHandlerProperty_p'] = v; return this['fld_com_dukescript_api_javafx_beans_DelegateEventHandlerProperty_p']; };
    m = CLS.cons__VLjavafx_beans_property_ReadOnlyProperty_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_com_dukescript_api_javafx_beans_DelegateEventHandlerProperty_p'] = lcA1;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.getBean__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = invoker.getBean__Ljava_lang_Object_2(lcA0['fld_com_dukescript_api_javafx_beans_DelegateEventHandlerProperty_p']);
return stA0;

};
c['getBean__Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
var stA0 = invoker.getName__Ljava_lang_String_2(lcA0['fld_com_dukescript_api_javafx_beans_DelegateEventHandlerProperty_p']);
return stA0;

};
c['getName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.addListener__VLjavafx_beans_value_ChangeListener_2 = function(lcA1) {
  var  lcA0 = this;
return;

};
c['addListener__VLjavafx_beans_value_ChangeListener_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.removeListener__VLjavafx_beans_value_ChangeListener_2 = function(lcA1) {
  var  lcA0 = this;
return;

};
c['removeListener__VLjavafx_beans_value_ChangeListener_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljavafx_event_EventHandler_2 = function() {
  var  lcA0 = this;
var stA0 = invoker.getValue__Ljava_lang_Object_2(lcA0['fld_com_dukescript_api_javafx_beans_DelegateEventHandlerProperty_p']);
if (stA0 !== null && !stA0['$instOf_javafx_event_EventHandler']) vm.java_lang_Class(false).castEx(stA0, 'javafx.event.EventHandler');
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.addListener__VLjavafx_beans_InvalidationListener_2 = function(lcA1) {
  var  lcA0 = this;
return;

};
c['addListener__VLjavafx_beans_InvalidationListener_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.removeListener__VLjavafx_beans_InvalidationListener_2 = function(lcA1) {
  var  lcA0 = this;
return;

};
c['removeListener__VLjavafx_beans_InvalidationListener_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.getValue__Ljavafx_event_EventHandler_2();
return stA0;

};
c['getValue__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    c.constructor = CLS;
    function com_dukescript_api_javafx_beans_DelegateEventHandlerPropertyfillInstOf(x) {
        Object.defineProperty(x, '$instOf_com_dukescript_api_javafx_beans_DelegateEventHandlerProperty', { value : true });
      vm.com_dukescript_api_javafx_beans_EventHandlerProperty(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: com_dukescript_api_javafx_beans_DelegateEventHandlerPropertyfillInstOf });
    com_dukescript_api_javafx_beans_DelegateEventHandlerPropertyfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'com/dukescript/api/javafx/beans/DelegateEventHandlerProperty';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        com_dukescript_api_javafx_beans_EventHandlerProperty(false).constructor.$class
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_com_dukescript_api_javafx_beans_DelegateEventHandlerProperty_p'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.com_dukescript_api_javafx_beans_DelegateEventHandlerProperty = com_dukescript_api_javafx_beans_DelegateEventHandlerProperty;


function com_dukescript_api_javafx_beans_EventHandlerProperty() {
  var m;
  var CLS = com_dukescript_api_javafx_beans_EventHandlerProperty;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function com_dukescript_api_javafx_beans_EventHandlerPropertyfillInstOf(x) {
        Object.defineProperty(x, '$instOf_com_dukescript_api_javafx_beans_EventHandlerProperty', { value : true });
      vm.javafx_beans_property_ReadOnlyProperty(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: com_dukescript_api_javafx_beans_EventHandlerPropertyfillInstOf });
    com_dukescript_api_javafx_beans_EventHandlerPropertyfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'com/dukescript/api/javafx/beans/EventHandlerProperty';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.javafx_beans_property_ReadOnlyProperty(false).constructor.$class
    ]; };
    CLS.$class.access = 1537;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.com_dukescript_api_javafx_beans_EventHandlerProperty = registerClass(exports,'com_dukescript_api_javafx_beans_EventHandlerProperty',com_dukescript_api_javafx_beans_EventHandlerProperty);

vm.javafx_beans_property_ReadOnlyProperty = link('javafx/beans/property/ReadOnlyProperty', function(f) { vm.javafx_beans_property_ReadOnlyProperty =  f; });

function com_dukescript_api_javafx_beans_FXBeanInfo$1() {
  var m;
  var CLS = com_dukescript_api_javafx_beans_FXBeanInfo$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function com_dukescript_api_javafx_beans_FXBeanInfo$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_com_dukescript_api_javafx_beans_FXBeanInfo$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: com_dukescript_api_javafx_beans_FXBeanInfo$1fillInstOf });
    com_dukescript_api_javafx_beans_FXBeanInfo$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'com/dukescript/api/javafx/beans/FXBeanInfo$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 69664;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.com_dukescript_api_javafx_beans_FXBeanInfo$1 = com_dukescript_api_javafx_beans_FXBeanInfo$1;


function com_dukescript_api_javafx_beans_FXBeanInfo$Builder$1() {
  var m;
  var CLS = com_dukescript_api_javafx_beans_FXBeanInfo$Builder$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$handler = function (v) {  if (arguments.length == 1) this['fld_com_dukescript_api_javafx_beans_FXBeanInfo$Builder$1_val$handler'] = v; return this['fld_com_dukescript_api_javafx_beans_FXBeanInfo$Builder$1_val$handler']; };
  m = c._this$1 = function (v) {  if (arguments.length == 1) this['fld_com_dukescript_api_javafx_beans_FXBeanInfo$Builder$1_this$1'] = v; return this['fld_com_dukescript_api_javafx_beans_FXBeanInfo$Builder$1_this$1']; };
    m = CLS.cons__VLcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljava_lang_Runnable_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
lcA0['fld_com_dukescript_api_javafx_beans_FXBeanInfo$Builder$1_this$1'] = lcA1;
lcA0['fld_com_dukescript_api_javafx_beans_FXBeanInfo$Builder$1_val$handler'] = lcA2;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLcom_dukescript_api_javafx_beans_ActionDataEvent_2 = function(lcA1) {
  var  lcA0 = this;
invoker.run__V(lcA0['fld_com_dukescript_api_javafx_beans_FXBeanInfo$Builder$1_val$handler']);
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.handle__VLjavafx_event_Event_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_com_dukescript_api_javafx_beans_ActionDataEvent']) vm.java_lang_Class(false).castEx(lcA1, 'com.dukescript.api.javafx.beans.ActionDataEvent');
lcA0.handle__VLcom_dukescript_api_javafx_beans_ActionDataEvent_2(lcA1);
return;

};
c['handle__VLjavafx_event_Event_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    c.constructor = CLS;
    function com_dukescript_api_javafx_beans_FXBeanInfo$Builder$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_com_dukescript_api_javafx_beans_FXBeanInfo$Builder$1', { value : true });
      vm.javafx_event_EventHandler(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: com_dukescript_api_javafx_beans_FXBeanInfo$Builder$1fillInstOf });
    com_dukescript_api_javafx_beans_FXBeanInfo$Builder$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'com/dukescript/api/javafx/beans/FXBeanInfo$Builder$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.javafx_event_EventHandler(false).constructor.$class
    ]; };
    CLS.$class.access = 65568;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_com_dukescript_api_javafx_beans_FXBeanInfo$Builder$1_val$handler'] = null;
    this['fld_com_dukescript_api_javafx_beans_FXBeanInfo$Builder$1_this$1'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.com_dukescript_api_javafx_beans_FXBeanInfo$Builder$1 = com_dukescript_api_javafx_beans_FXBeanInfo$Builder$1;

vm.javafx_event_EventHandler = link('javafx/event/EventHandler', function(f) { vm.javafx_event_EventHandler =  f; });

function com_dukescript_api_javafx_beans_FXBeanInfo$Builder() {
  var m;
  var CLS = com_dukescript_api_javafx_beans_FXBeanInfo$Builder;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._bean = function (v) {  if (arguments.length == 1) this['fld_com_dukescript_api_javafx_beans_FXBeanInfo$Builder_bean'] = v; return this['fld_com_dukescript_api_javafx_beans_FXBeanInfo$Builder_bean']; };
  m = c._properties = function (v) {  if (arguments.length == 1) this['fld_com_dukescript_api_javafx_beans_FXBeanInfo$Builder_properties'] = v; return this['fld_com_dukescript_api_javafx_beans_FXBeanInfo$Builder_properties']; };
  m = c._functions = function (v) {  if (arguments.length == 1) this['fld_com_dukescript_api_javafx_beans_FXBeanInfo$Builder_functions'] = v; return this['fld_com_dukescript_api_javafx_beans_FXBeanInfo$Builder_functions']; };
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_com_dukescript_api_javafx_beans_FXBeanInfo$Builder_this$0'] = v; return this['fld_com_dukescript_api_javafx_beans_FXBeanInfo$Builder_this$0']; };
    m = CLS.cons__VLcom_dukescript_api_javafx_beans_FXBeanInfo_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
lcA0['fld_com_dukescript_api_javafx_beans_FXBeanInfo$Builder_this$0'] = lcA1;
lcA0['fld_com_dukescript_api_javafx_beans_FXBeanInfo$Builder_bean'] = lcA2;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.property__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljavafx_beans_property_ReadOnlyProperty_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getName__Ljava_lang_String_2(lcA1);
var stA0 = stA0.property__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljava_lang_String_2Ljavafx_beans_value_ObservableValue_2(stA1, lcA1);
return stA0;

};
c['property__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljavafx_beans_property_ReadOnlyProperty_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.property__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljava_lang_String_2Ljavafx_beans_value_ObservableValue_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA1;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"Property must have a name: ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA1,lcA2);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = (refs_java_util_Objects || (refs_java_util_Objects = vm.java_util_Objects(false)))['requireNonNull__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_String_2'](stA0, stA1);
var stI0 = lcA2 != null && lcA2['$instOf_com_dukescript_api_javafx_beans_EventHandlerProperty'] ? 1 : 0;
if ((stI0) == 0) { gt = 41; break IF; }
if (lcA2 !== null && !lcA2['$instOf_com_dukescript_api_javafx_beans_EventHandlerProperty']) vm.java_lang_Class(false).castEx(lcA2, 'com.dukescript.api.javafx.beans.EventHandlerProperty');
var stA0 = c.action__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljava_lang_String_2Lcom_dukescript_api_javafx_beans_EventHandlerProperty_2.call(lcA0, lcA1, lcA2);
return stA0;
    }
    X_41: for (;;) { IF: if (gt <= 41) {

if ((lcA0['fld_com_dukescript_api_javafx_beans_FXBeanInfo$Builder_properties']) !== null) { gt = 59; break IF; }
var stA0 = lcA0;var stA1 = new vm.java_util_LinkedHashMap;
(refs_java_util_LinkedHashMap || (refs_java_util_LinkedHashMap = vm.java_util_LinkedHashMap(false))).constructor['cons__V'].call(stA1);
stA0['fld_com_dukescript_api_javafx_beans_FXBeanInfo$Builder_properties'] = stA1;
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_com_dukescript_api_javafx_beans_FXBeanInfo$Builder_properties'],lcA1, lcA2);
return lcA0;

    }
}}}
};
c['property__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljava_lang_String_2Ljavafx_beans_value_ObservableValue_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.constant__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljava_lang_String_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = lcA1;var stA2 = new com_dukescript_impl_javafx_beans_ConstantValue;
(refs_com_dukescript_impl_javafx_beans_ConstantValue || (refs_com_dukescript_impl_javafx_beans_ConstantValue = com_dukescript_impl_javafx_beans_ConstantValue(false))).constructor.cons__VLjava_lang_Object_2.call(stA2, lcA2);
var stA0 = stA0.property__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljava_lang_String_2Ljavafx_beans_value_ObservableValue_2(stA1, stA2);
return stA0;

};
c['constant__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljava_lang_String_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.action__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljava_lang_String_2Ljava_lang_Runnable_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new com_dukescript_api_javafx_beans_SimpleEventHandlerProperty;
var stA1 = stA0;var stA2 = lcA0['fld_com_dukescript_api_javafx_beans_FXBeanInfo$Builder_bean'];var stA3 = lcA1;var stA4 = new com_dukescript_api_javafx_beans_FXBeanInfo$Builder$1;
(refs_com_dukescript_api_javafx_beans_FXBeanInfo$Builder$1 || (refs_com_dukescript_api_javafx_beans_FXBeanInfo$Builder$1 = com_dukescript_api_javafx_beans_FXBeanInfo$Builder$1(false))).constructor.cons__VLcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljava_lang_Runnable_2.call(stA4, lcA0, lcA2);
(refs_com_dukescript_api_javafx_beans_SimpleEventHandlerProperty || (refs_com_dukescript_api_javafx_beans_SimpleEventHandlerProperty = com_dukescript_api_javafx_beans_SimpleEventHandlerProperty(false))).constructor.cons__VLjava_lang_Object_2Ljava_lang_String_2Ljavafx_event_EventHandler_2.call(stA1, stA2, stA3, stA4);
var lcA3 = stA0;
var stA0 = lcA0.action__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Lcom_dukescript_api_javafx_beans_EventHandlerProperty_2(lcA3);
return stA0;

};
c['action__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljava_lang_String_2Ljava_lang_Runnable_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.action__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljava_lang_String_2Ljavafx_event_EventHandler_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new com_dukescript_api_javafx_beans_SimpleEventHandlerProperty;
(refs_com_dukescript_api_javafx_beans_SimpleEventHandlerProperty || (refs_com_dukescript_api_javafx_beans_SimpleEventHandlerProperty = com_dukescript_api_javafx_beans_SimpleEventHandlerProperty(false))).constructor.cons__VLjava_lang_Object_2Ljava_lang_String_2Ljavafx_event_EventHandler_2.call(stA0, lcA0['fld_com_dukescript_api_javafx_beans_FXBeanInfo$Builder_bean'], lcA1, lcA2);
var lcA3 = stA0;
var stA0 = lcA0.action__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Lcom_dukescript_api_javafx_beans_EventHandlerProperty_2(lcA3);
return stA0;

};
c['action__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljava_lang_String_2Ljavafx_event_EventHandler_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.action__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljavafx_beans_property_ReadOnlyProperty_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = (refs_java_lang_System || (refs_java_lang_System = vm.java_lang_System(false)))['_err']();var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"this method will be removed: ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA1,lcA1);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.println__VLjava_lang_String_2(stA0,stA1);
var stI0 = lcA1 != null && lcA1['$instOf_com_dukescript_api_javafx_beans_EventHandlerProperty'] ? 1 : 0;
if ((stI0) == 0) { gt = 40; break IF; }
if (lcA1 !== null && !lcA1['$instOf_com_dukescript_api_javafx_beans_EventHandlerProperty']) vm.java_lang_Class(false).castEx(lcA1, 'com.dukescript.api.javafx.beans.EventHandlerProperty');
var lcA2 = lcA1;
{ gt = 49; break IF; }
    }
    X_40: for (;;) { IF: if (gt <= 40) {
var stA0 = new com_dukescript_api_javafx_beans_DelegateEventHandlerProperty;
(refs_com_dukescript_api_javafx_beans_DelegateEventHandlerProperty || (refs_com_dukescript_api_javafx_beans_DelegateEventHandlerProperty = com_dukescript_api_javafx_beans_DelegateEventHandlerProperty(false))).constructor.cons__VLjavafx_beans_property_ReadOnlyProperty_2.call(stA0, lcA1);
var lcA2 = stA0;
    }
    X_49: for (;;) { IF: if (gt <= 49) {

var stA0 = lcA0.action__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Lcom_dukescript_api_javafx_beans_EventHandlerProperty_2(lcA2);
return stA0;

    }
}}}
};
c['action__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljavafx_beans_property_ReadOnlyProperty_2'] = m;

    m.anno = {"Ljava/lang/Deprecated;" : {

}

    };
    m.access = 1;
    m.cls = CLS;
    m = c.action__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Lcom_dukescript_api_javafx_beans_EventHandlerProperty_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getName__Ljava_lang_String_2(lcA1);
var stA0 = c.action__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljava_lang_String_2Lcom_dukescript_api_javafx_beans_EventHandlerProperty_2.call(stA0, stA1, lcA1);
return stA0;

};
c['action__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Lcom_dukescript_api_javafx_beans_EventHandlerProperty_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.action__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljava_lang_String_2Lcom_dukescript_api_javafx_beans_EventHandlerProperty_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0['fld_com_dukescript_api_javafx_beans_FXBeanInfo$Builder_functions']) !== null) { gt = 18; break IF; }
var stA0 = lcA0;var stA1 = new vm.java_util_LinkedHashMap;
(refs_java_util_LinkedHashMap || (refs_java_util_LinkedHashMap = vm.java_util_LinkedHashMap(false))).constructor['cons__V'].call(stA1);
stA0['fld_com_dukescript_api_javafx_beans_FXBeanInfo$Builder_functions'] = stA1;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

if ((lcA1) !== null) { gt = 49; break IF; }
var stA0 = new vm.java_lang_NullPointerException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"No name for ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA2,lcA2);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
(refs_java_lang_NullPointerException || (refs_java_lang_NullPointerException = vm.java_lang_NullPointerException(false))).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }
    }
    X_49: for (;;) { IF: if (gt <= 49) {

var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_com_dukescript_api_javafx_beans_FXBeanInfo$Builder_functions'],lcA1, lcA2);
if (stA0 !== null && !stA0['$instOf_com_dukescript_api_javafx_beans_EventHandlerProperty']) vm.java_lang_Class(false).castEx(stA0, 'com.dukescript.api.javafx.beans.EventHandlerProperty');
var lcA3 = stA0;
if ((lcA3) === null) { gt = 116; break IF; }
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_com_dukescript_api_javafx_beans_FXBeanInfo$Builder_functions'],lcA1, lcA3);
var stA0 = new vm.java_lang_IllegalArgumentException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Cannot redefine ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA2,lcA3);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2," with ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA2,lcA2);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
(refs_java_lang_IllegalArgumentException || (refs_java_lang_IllegalArgumentException = vm.java_lang_IllegalArgumentException(false))).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }
    }
    X_116: for (;;) { IF: if (gt <= 116) {

return lcA0;

    }
}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.build__Lcom_dukescript_api_javafx_beans_FXBeanInfo_2 = function() {
  var  lcA0 = this;
var stA0 = new com_dukescript_api_javafx_beans_FXBeanInfo;
(refs_com_dukescript_api_javafx_beans_FXBeanInfo || (refs_com_dukescript_api_javafx_beans_FXBeanInfo = com_dukescript_api_javafx_beans_FXBeanInfo(false))).constructor.cons__VLjava_lang_Object_2Ljava_util_Map_2Ljava_util_Map_2Lcom_dukescript_api_javafx_beans_FXBeanInfo$1_2.call(stA0, lcA0['fld_com_dukescript_api_javafx_beans_FXBeanInfo$Builder_bean'], lcA0['fld_com_dukescript_api_javafx_beans_FXBeanInfo$Builder_properties'], lcA0['fld_com_dukescript_api_javafx_beans_FXBeanInfo$Builder_functions'], null);
var lcA1 = stA0;
lcA0['fld_com_dukescript_api_javafx_beans_FXBeanInfo$Builder_properties'] = null;
lcA0['fld_com_dukescript_api_javafx_beans_FXBeanInfo$Builder_functions'] = null;
return lcA1;

};
c['build__Lcom_dukescript_api_javafx_beans_FXBeanInfo_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function com_dukescript_api_javafx_beans_FXBeanInfo$BuilderfillInstOf(x) {
        Object.defineProperty(x, '$instOf_com_dukescript_api_javafx_beans_FXBeanInfo$Builder', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: com_dukescript_api_javafx_beans_FXBeanInfo$BuilderfillInstOf });
    com_dukescript_api_javafx_beans_FXBeanInfo$BuilderfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'com/dukescript/api/javafx/beans/FXBeanInfo$Builder';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_StringBuilder;
    var refs_java_util_Objects;
    var refs_java_util_LinkedHashMap;
    var refs_com_dukescript_impl_javafx_beans_ConstantValue;
    var refs_com_dukescript_api_javafx_beans_FXBeanInfo$Builder$1;
    var refs_com_dukescript_api_javafx_beans_SimpleEventHandlerProperty;
    var refs_java_lang_System;
    var refs_com_dukescript_api_javafx_beans_DelegateEventHandlerProperty;
    var refs_java_lang_NullPointerException;
    var refs_java_lang_IllegalArgumentException;
    var refs_com_dukescript_api_javafx_beans_FXBeanInfo;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_com_dukescript_api_javafx_beans_FXBeanInfo$Builder_bean'] = null;
    this['fld_com_dukescript_api_javafx_beans_FXBeanInfo$Builder_properties'] = null;
    this['fld_com_dukescript_api_javafx_beans_FXBeanInfo$Builder_functions'] = null;
    this['fld_com_dukescript_api_javafx_beans_FXBeanInfo$Builder_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.com_dukescript_api_javafx_beans_FXBeanInfo$Builder = registerClass(exports,'com_dukescript_api_javafx_beans_FXBeanInfo$Builder',com_dukescript_api_javafx_beans_FXBeanInfo$Builder);


function com_dukescript_api_javafx_beans_FXBeanInfo() {
  var m;
  var CLS = com_dukescript_api_javafx_beans_FXBeanInfo;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._bean = function (v) {  if (arguments.length == 1) this['fld_com_dukescript_api_javafx_beans_FXBeanInfo_bean'] = v; return this['fld_com_dukescript_api_javafx_beans_FXBeanInfo_bean']; };
  m = c._extra = function (v) {  if (arguments.length == 1) this['fld_com_dukescript_api_javafx_beans_FXBeanInfo_extra'] = v; return this['fld_com_dukescript_api_javafx_beans_FXBeanInfo_extra']; };
  m = c._properties = function (v) {  if (arguments.length == 1) this['fld_com_dukescript_api_javafx_beans_FXBeanInfo_properties'] = v; return this['fld_com_dukescript_api_javafx_beans_FXBeanInfo_properties']; };
  m = c._functions = function (v) {  if (arguments.length == 1) this['fld_com_dukescript_api_javafx_beans_FXBeanInfo_functions'] = v; return this['fld_com_dukescript_api_javafx_beans_FXBeanInfo_functions']; };
    m = CLS.cons__VLjava_lang_Object_2Ljava_util_Map_2Ljava_util_Map_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

lcA0['fld_com_dukescript_api_javafx_beans_FXBeanInfo_bean'] = lcA1;
var stA0 = lcA0;if ((lcA2) !== null) { gt = 20; break IF; }
var stA1 = (refs_java_util_Collections || (refs_java_util_Collections = vm.java_util_Collections(false)))['emptyMap__Ljava_util_Map_2']();
{ gt = 24; break IF; }
    }
    X_20: for (;;) { IF: if (gt <= 20) {

var stA1 = (refs_java_util_Collections || (refs_java_util_Collections = vm.java_util_Collections(false)))['unmodifiableMap__Ljava_util_Map_2Ljava_util_Map_2'](lcA2);
    }
    X_24: for (;;) { IF: if (gt <= 24) {
stA0['fld_com_dukescript_api_javafx_beans_FXBeanInfo_properties'] = stA1;
var stA0 = lcA0;if ((lcA3) !== null) { gt = 38; break IF; }
var stA1 = (refs_java_util_Collections || (refs_java_util_Collections = vm.java_util_Collections(false)))['emptyMap__Ljava_util_Map_2']();
{ gt = 42; break IF; }
    }
    X_38: for (;;) { IF: if (gt <= 38) {

var stA1 = (refs_java_util_Collections || (refs_java_util_Collections = vm.java_util_Collections(false)))['unmodifiableMap__Ljava_util_Map_2Ljava_util_Map_2'](lcA3);
    }
    X_42: for (;;) { IF: if (gt <= 42) {
stA0['fld_com_dukescript_api_javafx_beans_FXBeanInfo_functions'] = stA1;
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA4 = stA0;
if ((lcA1) === null) { gt = 116; break IF; }
var stA0 = (refs_java_util_ServiceLoader || (refs_java_util_ServiceLoader = vm.java_util_ServiceLoader(false)))['load__Ljava_util_ServiceLoader_2Ljava_lang_Class_2']((refs_com_dukescript_spi_javafx_beans_FXBeanInfoProvider || (refs_com_dukescript_spi_javafx_beans_FXBeanInfoProvider = com_dukescript_spi_javafx_beans_FXBeanInfoProvider(false))).constructor.$class);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA5 = stA0;
    }
    X_68: for (;;) { IF: if (gt <= 68) {

var stI0 = invoker.hasNext__Z(lcA5);
if ((stI0) == 0) { gt = 116; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA5);
if (stA0 !== null && !stA0['$instOf_com_dukescript_spi_javafx_beans_FXBeanInfoProvider']) vm.java_lang_Class(false).castEx(stA0, 'com.dukescript.spi.javafx.beans.FXBeanInfoProvider');
var lcA6 = stA0;
var stA0 = invoker.findExtraInfo__Ljava_lang_Object_2Lcom_dukescript_api_javafx_beans_FXBeanInfo_2(lcA6,lcA0);
var lcA7 = stA0;
if ((lcA7) === null) { gt = 113; break IF; }
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA4,lcA7);
    }
    X_113: for (;;) { IF: if (gt <= 113) {
{ gt = 0; continue X_68; }
    }
    X_116: for (;;) { IF: if (gt <= 116) {

var stA0 = lcA0;var stI1 = invoker.isEmpty__Z(lcA4);
if ((stI1) == 0) { gt = 131; break IF; }
var stA1 = null;{ gt = 160; break IF; }
    }
    X_131: for (;;) { IF: if (gt <= 131) {

var stI1 = invoker.size__I(lcA4);
if ((stI1) != (1)) { gt = 153; break IF; }
var stA1 = invoker.get__Ljava_lang_Object_2I(lcA4,0);
{ gt = 160; break IF; }
    }
    X_153: for (;;) { IF: if (gt <= 153) {

var stA1 = invoker.toArray___3Ljava_lang_Object_2(lcA4);
    }
    X_160: for (;;) { IF: if (gt <= 160) {
stA0['fld_com_dukescript_api_javafx_beans_FXBeanInfo_extra'] = stA1;
return;

    }
}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.getBean__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
return lcA0['fld_com_dukescript_api_javafx_beans_FXBeanInfo_bean'];

};
c['getBean__Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getProperties__Ljava_util_Map_2 = function() {
  var  lcA0 = this;
return lcA0['fld_com_dukescript_api_javafx_beans_FXBeanInfo_properties'];

};
c['getProperties__Ljava_util_Map_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getFunctions__Ljava_util_Map_2 = function() {
  var  lcA0 = this;
return lcA0['fld_com_dukescript_api_javafx_beans_FXBeanInfo_functions'];

};
c['getFunctions__Ljava_util_Map_2'] = m;

    m.anno = {"Ljava/lang/Deprecated;" : {

}

    };
    m.access = 1;
    m.cls = CLS;
    m = c.getActions__Ljava_util_Map_2 = function() {
  var  lcA0 = this;
return lcA0['fld_com_dukescript_api_javafx_beans_FXBeanInfo_functions'];

};
c['getActions__Ljava_util_Map_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.lookup__Ljava_lang_Object_2Ljava_lang_Class_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.isArray__Z(lcA1);
if ((stI0) == 0) { gt = 9; break IF; }
return null;
    }
    X_9: for (;;) { IF: if (gt <= 9) {

var stI0 = invoker.isInstance__ZLjava_lang_Object_2(lcA1,lcA0['fld_com_dukescript_api_javafx_beans_FXBeanInfo_extra']);
if ((stI0) == 0) { gt = 29; break IF; }
var stA0 = invoker.cast__Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,lcA0['fld_com_dukescript_api_javafx_beans_FXBeanInfo_extra']);
return stA0;
    }
    X_29: for (;;) { IF: if (gt <= 29) {

var stI0 = Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA0['fld_com_dukescript_api_javafx_beans_FXBeanInfo_extra'], 1, vm.java_lang_Object);
if ((stI0) == 0) { gt = 90; break IF; }
if (lcA0['fld_com_dukescript_api_javafx_beans_FXBeanInfo_extra'] !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA0['fld_com_dukescript_api_javafx_beans_FXBeanInfo_extra'], 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA0['fld_com_dukescript_api_javafx_beans_FXBeanInfo_extra'], '');
if (lcA0['fld_com_dukescript_api_javafx_beans_FXBeanInfo_extra'] !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA0['fld_com_dukescript_api_javafx_beans_FXBeanInfo_extra'], 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA0['fld_com_dukescript_api_javafx_beans_FXBeanInfo_extra'], '');
var lcA2 = lcA0['fld_com_dukescript_api_javafx_beans_FXBeanInfo_extra'];
var lcI3 = (lcA2).length;
var lcI4 = 0;
    }
    X_56: for (;;) { IF: if (gt <= 56) {

if ((lcI4) >= (lcI3)) { gt = 90; break IF; }
var lcA5 = (lcA2[lcI4] || Array.at(lcA2, lcI4));
var stI0 = invoker.isInstance__ZLjava_lang_Object_2(lcA1,lcA5);
if ((stI0) == 0) { gt = 84; break IF; }
var stA0 = invoker.cast__Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,lcA5);
return stA0;
    }
    X_84: for (;;) { IF: if (gt <= 84) {
lcI4++;
{ gt = 0; continue X_56; }
    }
    X_90: for (;;) { IF: if (gt <= 90) {

return null;

    }
}}}}}}
};
c['lookup__Ljava_lang_Object_2Ljava_lang_Class_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.newBuilder__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljava_lang_Object_2 = function(lcA0) {
var stA0 = new com_dukescript_api_javafx_beans_FXBeanInfo$Builder;
var stA1 = stA0;var stA2 = new com_dukescript_api_javafx_beans_FXBeanInfo;
c.constructor.cons__VLjava_lang_Object_2Ljava_util_Map_2Ljava_util_Map_2.call(stA2, null, null, null);
var stA3 = stA2;
var stA3 = invoker.getClass__Ljava_lang_Class_2(stA3);
(refs_com_dukescript_api_javafx_beans_FXBeanInfo$Builder || (refs_com_dukescript_api_javafx_beans_FXBeanInfo$Builder = com_dukescript_api_javafx_beans_FXBeanInfo$Builder(false))).constructor.cons__VLcom_dukescript_api_javafx_beans_FXBeanInfo_2Ljava_lang_Object_2.call(stA1, stA2, lcA0);
return stA0;

};
c['newBuilder__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljava_lang_Object_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.create__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljava_lang_Object_2 = function(lcA0) {
var stA0 = c.newBuilder__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljava_lang_Object_2(lcA0);
return stA0;

};
c['create__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Builder_2Ljava_lang_Object_2'] = m;

    m.anno = {"Ljava/lang/Deprecated;" : {

}

    };
    m.access = 9;
    m.cls = CLS;
    m = CLS.cons__VLjava_lang_Object_2Ljava_util_Map_2Ljava_util_Map_2Lcom_dukescript_api_javafx_beans_FXBeanInfo$1_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;
c.constructor.cons__VLjava_lang_Object_2Ljava_util_Map_2Ljava_util_Map_2.call(lcA0, lcA1, lcA2, lcA3);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function com_dukescript_api_javafx_beans_FXBeanInfofillInstOf(x) {
        Object.defineProperty(x, '$instOf_com_dukescript_api_javafx_beans_FXBeanInfo', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: com_dukescript_api_javafx_beans_FXBeanInfofillInstOf });
    com_dukescript_api_javafx_beans_FXBeanInfofillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'com/dukescript/api/javafx/beans/FXBeanInfo';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    var refs_java_util_Collections;
    var refs_java_util_ArrayList;
    var refs_com_dukescript_spi_javafx_beans_FXBeanInfoProvider;
    var refs_java_util_ServiceLoader;
    var refs_com_dukescript_api_javafx_beans_FXBeanInfo$Builder;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_com_dukescript_api_javafx_beans_FXBeanInfo_bean'] = null;
    this['fld_com_dukescript_api_javafx_beans_FXBeanInfo_extra'] = null;
    this['fld_com_dukescript_api_javafx_beans_FXBeanInfo_properties'] = null;
    this['fld_com_dukescript_api_javafx_beans_FXBeanInfo_functions'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.com_dukescript_api_javafx_beans_FXBeanInfo = registerClass(exports,'com_dukescript_api_javafx_beans_FXBeanInfo',com_dukescript_api_javafx_beans_FXBeanInfo);

vm.java_util_ServiceLoader = link('java/util/ServiceLoader', function(f) { vm.java_util_ServiceLoader =  f; });

function com_dukescript_spi_javafx_beans_FXBeanInfoProvider() {
  var m;
  var CLS = com_dukescript_spi_javafx_beans_FXBeanInfoProvider;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._type = function (v) {  if (arguments.length == 1) this['fld_com_dukescript_spi_javafx_beans_FXBeanInfoProvider_type'] = v; return this['fld_com_dukescript_spi_javafx_beans_FXBeanInfoProvider_type']; };
    m = CLS.cons__VLjava_lang_Class_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_com_dukescript_spi_javafx_beans_FXBeanInfoProvider_type'] = lcA1;
return;

};
CLS['cons__VLjava_lang_Class_2'] = m;

    m.access = 4;
    m.cls = CLS;
    m = c.findExtraInfo__Ljava_lang_Object_2Lcom_dukescript_api_javafx_beans_FXBeanInfo_2 = function(lcA1) {
};
c['findExtraInfo__Ljava_lang_Object_2Lcom_dukescript_api_javafx_beans_FXBeanInfo_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function com_dukescript_spi_javafx_beans_FXBeanInfoProviderfillInstOf(x) {
        Object.defineProperty(x, '$instOf_com_dukescript_spi_javafx_beans_FXBeanInfoProvider', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: com_dukescript_spi_javafx_beans_FXBeanInfoProviderfillInstOf });
    com_dukescript_spi_javafx_beans_FXBeanInfoProviderfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'com/dukescript/spi/javafx/beans/FXBeanInfoProvider';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1057;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_com_dukescript_spi_javafx_beans_FXBeanInfoProvider_type'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.com_dukescript_spi_javafx_beans_FXBeanInfoProvider = registerClass(exports,'com_dukescript_spi_javafx_beans_FXBeanInfoProvider',com_dukescript_spi_javafx_beans_FXBeanInfoProvider);

vm.java_util_ArrayList = link('java/util/ArrayList', function(f) { vm.java_util_ArrayList =  f; });
vm.java_util_Collections = link('java/util/Collections', function(f) { vm.java_util_Collections =  f; });
vm.java_lang_IllegalArgumentException = link('java/lang/IllegalArgumentException', function(f) { vm.java_lang_IllegalArgumentException =  f; });
vm.java_lang_NullPointerException = link('java/lang/NullPointerException', function(f) { vm.java_lang_NullPointerException =  f; });
vm.java_lang_Deprecated = link('java/lang/Deprecated', function(f) { vm.java_lang_Deprecated =  f; });
vm.java_lang_System = link('java/lang/System', function(f) { vm.java_lang_System =  f; });

function com_dukescript_api_javafx_beans_SimpleEventHandlerProperty() {
  var m;
  var CLS = com_dukescript_api_javafx_beans_SimpleEventHandlerProperty;
  if (!CLS.$class) {
    var pp = vm.javafx_beans_property_SimpleObjectProperty(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_javafx_beans_property_SimpleObjectProperty || (refs_javafx_beans_property_SimpleObjectProperty = vm.javafx_beans_property_SimpleObjectProperty(false))).constructor['cons__V'].call(lcA0);
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLjavafx_event_EventHandler_2 = function(lcA1) {
  var  lcA0 = this;
(refs_javafx_beans_property_SimpleObjectProperty || (refs_javafx_beans_property_SimpleObjectProperty = vm.javafx_beans_property_SimpleObjectProperty(false))).constructor['cons__VLjava_lang_Object_2'].call(lcA0, lcA1);
return;

};
CLS['cons__VLjavafx_event_EventHandler_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLjava_lang_Object_2Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
(refs_javafx_beans_property_SimpleObjectProperty || (refs_javafx_beans_property_SimpleObjectProperty = vm.javafx_beans_property_SimpleObjectProperty(false))).constructor['cons__VLjava_lang_Object_2Ljava_lang_String_2'].call(lcA0, lcA1, lcA2);
return;

};
CLS['cons__VLjava_lang_Object_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLjava_lang_Object_2Ljava_lang_String_2Ljavafx_event_EventHandler_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
(refs_javafx_beans_property_SimpleObjectProperty || (refs_javafx_beans_property_SimpleObjectProperty = vm.javafx_beans_property_SimpleObjectProperty(false))).constructor['cons__VLjava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2'].call(lcA0, lcA1, lcA2, lcA3);
return;

};
CLS['cons__VLjava_lang_Object_2Ljava_lang_String_2Ljavafx_event_EventHandler_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function com_dukescript_api_javafx_beans_SimpleEventHandlerPropertyfillInstOf(x) {
        Object.defineProperty(x, '$instOf_com_dukescript_api_javafx_beans_SimpleEventHandlerProperty', { value : true });
      vm.com_dukescript_api_javafx_beans_EventHandlerProperty(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: com_dukescript_api_javafx_beans_SimpleEventHandlerPropertyfillInstOf });
    com_dukescript_api_javafx_beans_SimpleEventHandlerPropertyfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'com/dukescript/api/javafx/beans/SimpleEventHandlerProperty';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        com_dukescript_api_javafx_beans_EventHandlerProperty(false).constructor.$class
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_javafx_beans_property_SimpleObjectProperty;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.com_dukescript_api_javafx_beans_SimpleEventHandlerProperty = registerClass(exports,'com_dukescript_api_javafx_beans_SimpleEventHandlerProperty',com_dukescript_api_javafx_beans_SimpleEventHandlerProperty);

vm.javafx_beans_property_SimpleObjectProperty = link('javafx/beans/property/SimpleObjectProperty', function(f) { vm.javafx_beans_property_SimpleObjectProperty =  f; });

function com_dukescript_impl_javafx_beans_ConstantValue() {
  var m;
  var CLS = com_dukescript_impl_javafx_beans_ConstantValue;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._value = function (v) {  if (arguments.length == 1) this['fld_com_dukescript_impl_javafx_beans_ConstantValue_value'] = v; return this['fld_com_dukescript_impl_javafx_beans_ConstantValue_value']; };
    m = CLS.cons__VLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_com_dukescript_impl_javafx_beans_ConstantValue_value'] = lcA1;
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.addListener__VLjavafx_beans_value_ChangeListener_2 = function(lcA1) {
  var  lcA0 = this;
return;

};
c['addListener__VLjavafx_beans_value_ChangeListener_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.removeListener__VLjavafx_beans_value_ChangeListener_2 = function(lcA1) {
  var  lcA0 = this;
return;

};
c['removeListener__VLjavafx_beans_value_ChangeListener_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
return lcA0['fld_com_dukescript_impl_javafx_beans_ConstantValue_value'];

};
c['getValue__Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.addListener__VLjavafx_beans_InvalidationListener_2 = function(lcA1) {
  var  lcA0 = this;
return;

};
c['addListener__VLjavafx_beans_InvalidationListener_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.removeListener__VLjavafx_beans_InvalidationListener_2 = function(lcA1) {
  var  lcA0 = this;
return;

};
c['removeListener__VLjavafx_beans_InvalidationListener_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function com_dukescript_impl_javafx_beans_ConstantValuefillInstOf(x) {
        Object.defineProperty(x, '$instOf_com_dukescript_impl_javafx_beans_ConstantValue', { value : true });
      vm.javafx_beans_value_ObservableValue(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: com_dukescript_impl_javafx_beans_ConstantValuefillInstOf });
    com_dukescript_impl_javafx_beans_ConstantValuefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'com/dukescript/impl/javafx/beans/ConstantValue';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.javafx_beans_value_ObservableValue(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_com_dukescript_impl_javafx_beans_ConstantValue_value'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.com_dukescript_impl_javafx_beans_ConstantValue = com_dukescript_impl_javafx_beans_ConstantValue;

vm.javafx_beans_value_ObservableValue = link('javafx/beans/value/ObservableValue', function(f) { vm.javafx_beans_value_ObservableValue =  f; });
vm.java_util_LinkedHashMap = link('java/util/LinkedHashMap', function(f) { vm.java_util_LinkedHashMap =  f; });
vm.java_util_Objects = link('java/util/Objects', function(f) { vm.java_util_Objects =  f; });
vm.java_lang_StringBuilder = link('java/lang/StringBuilder', function(f) { vm.java_lang_StringBuilder =  f; });

function com_dukescript_api_javafx_beans_FXBeanInfo$Generate() {
  var m;
  var CLS = com_dukescript_api_javafx_beans_FXBeanInfo$Generate;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function com_dukescript_api_javafx_beans_FXBeanInfo$GeneratefillInstOf(x) {
        Object.defineProperty(x, '$instOf_com_dukescript_api_javafx_beans_FXBeanInfo$Generate', { value : true });
      vm.java_lang_annotation_Annotation(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: com_dukescript_api_javafx_beans_FXBeanInfo$GeneratefillInstOf });
    com_dukescript_api_javafx_beans_FXBeanInfo$GeneratefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'com/dukescript/api/javafx/beans/FXBeanInfo$Generate';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_annotation_Annotation(false).constructor.$class
    ]; };
    CLS.$class.access = 9729;
    CLS.$class.cnstr = CLS;
    CLS.$class.anno = {"Ljava/lang/annotation/Retention;" : {
"value" : (refs_java_lang_annotation_RetentionPolicy || (refs_java_lang_annotation_RetentionPolicy = vm.java_lang_annotation_RetentionPolicy(false)))['valueOf__Ljava_lang_annotation_RetentionPolicy_2Ljava_lang_String_2']('SOURCE')
}
,"Ljava/lang/annotation/Target;" : {
"value" : [(refs_java_lang_annotation_ElementType || (refs_java_lang_annotation_ElementType = vm.java_lang_annotation_ElementType(false)))['valueOf__Ljava_lang_annotation_ElementType_2Ljava_lang_String_2']('TYPE')]
}

    };
    var refs_java_lang_annotation_RetentionPolicy;
    var refs_java_lang_annotation_ElementType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.com_dukescript_api_javafx_beans_FXBeanInfo$Generate = registerClass(exports,'com_dukescript_api_javafx_beans_FXBeanInfo$Generate',com_dukescript_api_javafx_beans_FXBeanInfo$Generate);

vm.java_lang_annotation_ElementType = link('java/lang/annotation/ElementType', function(f) { vm.java_lang_annotation_ElementType =  f; });
vm.java_lang_annotation_Target = link('java/lang/annotation/Target', function(f) { vm.java_lang_annotation_Target =  f; });
vm.java_lang_annotation_RetentionPolicy = link('java/lang/annotation/RetentionPolicy', function(f) { vm.java_lang_annotation_RetentionPolicy =  f; });
vm.java_lang_annotation_Retention = link('java/lang/annotation/Retention', function(f) { vm.java_lang_annotation_Retention =  f; });
vm.java_lang_annotation_Annotation = link('java/lang/annotation/Annotation', function(f) { vm.java_lang_annotation_Annotation =  f; });

function com_dukescript_api_javafx_beans_FXBeanInfo$Provider() {
  var m;
  var CLS = com_dukescript_api_javafx_beans_FXBeanInfo$Provider;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.getFXBeanInfo__Lcom_dukescript_api_javafx_beans_FXBeanInfo_2 = function() {
};
c['getFXBeanInfo__Lcom_dukescript_api_javafx_beans_FXBeanInfo_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function com_dukescript_api_javafx_beans_FXBeanInfo$ProviderfillInstOf(x) {
        Object.defineProperty(x, '$instOf_com_dukescript_api_javafx_beans_FXBeanInfo$Provider', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: com_dukescript_api_javafx_beans_FXBeanInfo$ProviderfillInstOf });
    com_dukescript_api_javafx_beans_FXBeanInfo$ProviderfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'com/dukescript/api/javafx/beans/FXBeanInfo$Provider';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1537;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.com_dukescript_api_javafx_beans_FXBeanInfo$Provider = registerClass(exports,'com_dukescript_api_javafx_beans_FXBeanInfo$Provider',com_dukescript_api_javafx_beans_FXBeanInfo$Provider);


function com_dukescript_impl_javafx_beans_FXBeanInfoProcessor$ExpectError() {
  var m;
  var CLS = com_dukescript_impl_javafx_beans_FXBeanInfoProcessor$ExpectError;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.value___3Ljava_lang_String_2 = function() {
};
    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function com_dukescript_impl_javafx_beans_FXBeanInfoProcessor$ExpectErrorfillInstOf(x) {
        Object.defineProperty(x, '$instOf_com_dukescript_impl_javafx_beans_FXBeanInfoProcessor$ExpectError', { value : true });
      vm.java_lang_annotation_Annotation(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: com_dukescript_impl_javafx_beans_FXBeanInfoProcessor$ExpectErrorfillInstOf });
    com_dukescript_impl_javafx_beans_FXBeanInfoProcessor$ExpectErrorfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'com/dukescript/impl/javafx/beans/FXBeanInfoProcessor$ExpectError';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_annotation_Annotation(false).constructor.$class
    ]; };
    CLS.$class.access = 9728;
    CLS.$class.cnstr = CLS;
    CLS.$class.anno = {"Ljava/lang/annotation/Retention;" : {
"value" : (refs_java_lang_annotation_RetentionPolicy || (refs_java_lang_annotation_RetentionPolicy = vm.java_lang_annotation_RetentionPolicy(false)))['valueOf__Ljava_lang_annotation_RetentionPolicy_2Ljava_lang_String_2']('SOURCE')
}

    };
    var refs_java_lang_annotation_RetentionPolicy;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.com_dukescript_impl_javafx_beans_FXBeanInfoProcessor$ExpectError = com_dukescript_impl_javafx_beans_FXBeanInfoProcessor$ExpectError;


function com_dukescript_impl_javafx_beans_FXBeanInfoProcessor() {
  var m;
  var CLS = com_dukescript_impl_javafx_beans_FXBeanInfoProcessor;
  if (!CLS.$class) {
    var pp = vm.javax_annotation_processing_AbstractProcessor(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_javax_annotation_processing_AbstractProcessor || (refs_javax_annotation_processing_AbstractProcessor = vm.javax_annotation_processing_AbstractProcessor(false))).constructor['cons__V'].call(lcA0);
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getSupportedSourceVersion__Ljavax_lang_model_SourceVersion_2 = function() {
  var  lcA0 = this;
var stA0 = (refs_javax_lang_model_SourceVersion || (refs_javax_lang_model_SourceVersion = vm.javax_lang_model_SourceVersion(false)))['latest__Ljavax_lang_model_SourceVersion_2']();
return stA0;

};
c['getSupportedSourceVersion__Ljavax_lang_model_SourceVersion_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.process__ZLjava_util_Set_2Ljavax_annotation_processing_RoundEnvironment_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 1);
var lcA3 = stA0;
var stA0 = invoker.getElementUtils__Ljavax_lang_model_util_Elements_2(c['_processingEnv'].call(lcA0));
var stA0 = invoker.getTypeElement__Ljavax_lang_model_element_TypeElement_2Ljava_lang_CharSequence_2(stA0,"java.lang.Object");
var lcA4 = stA0;
var stA0 = invoker.getElementsAnnotatedWith__Ljava_util_Set_2Ljava_lang_Class_2(lcA2,(refs_com_dukescript_api_javafx_beans_FXBeanInfo$Generate || (refs_com_dukescript_api_javafx_beans_FXBeanInfo$Generate = com_dukescript_api_javafx_beans_FXBeanInfo$Generate(false))).constructor.$class);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA5 = stA0;
    }
    X_41: for (;;) { IF: if (gt <= 41) {

var stI0 = invoker.hasNext__Z(lcA5);
if ((stI0) == 0) { gt = 676; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA5);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_Element']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.Element');
var lcA6 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA6);
if ((stA0) === ((refs_javax_lang_model_element_ElementKind || (refs_javax_lang_model_element_ElementKind = vm.javax_lang_model_element_ElementKind(false)))['_CLASS']())) { gt = 88; break IF; }
c.emitErrorOn__VLjavax_lang_model_element_Element_2Ljava_lang_String_2_3Z.call(lcA0, lcA6, "Only use @Introspect on classes", lcA3);
{ gt = 0; continue X_41; }
    }
    X_88: for (;;) { IF: if (gt <= 88) {

var stA0 = c.findPackage__Ljava_lang_String_2Ljavax_lang_model_element_Element_2_3Z.call(lcA0, lcA6, lcA3);
var lcA7 = stA0;
if ((lcA7) !== null) { gt = 105; break IF; }
{ gt = 0; continue X_41; }
    }
    X_105: for (;;) { IF: if (gt <= 105) {

if (lcA6 !== null && !lcA6['$instOf_javax_lang_model_element_TypeElement']) vm.java_lang_Class(false).castEx(lcA6, 'javax.lang.model.element.TypeElement');
var lcA8 = lcA6;
var stA0 = invoker.getSuperclass__Ljavax_lang_model_type_TypeMirror_2(lcA8);
var lcA9 = stA0;
if ((lcA9) === null) { gt = 152; break IF; }
var stA0 = invoker.getTypeUtils__Ljavax_lang_model_util_Types_2(c['_processingEnv'].call(lcA0));
var stA0 = invoker.asElement__Ljavax_lang_model_element_Element_2Ljavax_lang_model_type_TypeMirror_2(stA0,lcA9);
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,lcA4);
if ((stI0) == 0) { gt = 192; break IF; }
    }
    X_152: for (;;) { IF: if (gt <= 152) {

var stA0 = lcA0;var stA1 = lcA6;var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Class must extend another class. Try adding: extends ");
var stA3 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA6);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA2,stA3);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"BeanInfo");
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
c.emitErrorOn__VLjavax_lang_model_element_Element_2Ljava_lang_String_2_3Z.call(stA0, stA1, stA2, lcA3);
{ gt = 0; continue X_41; }
    }
    X_192: for (;;) { IF: if (gt <= 192) {

var stA0 = c.inPackageName__Ljava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, lcA6);
var lcA10 = stA0;
try {
var stA0 = invoker.toString__Ljava_lang_String_2(lcA9);
var stA1 = invoker.toString__Ljava_lang_String_2(lcA9);
var stI1 = invoker.lastIndexOf__II(stA1,(46));
var stA0 = invoker.substring__Ljava_lang_String_2I(stA0,(((stI1) + (1)) | 0));
var lcA11 = stA0;
var stA0 = invoker.getFiler__Ljavax_annotation_processing_Filer_2(c['_processingEnv'].call(lcA0));
var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA7);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,".");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA11);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljavax/lang/model/element/Element;', vm.javax_lang_model_element_Element, 1);
Array.at(stA2, 0, lcA6);
var stA0 = invoker.createSourceFile__Ljavax_tools_JavaFileObject_2Ljava_lang_CharSequence_2_3Ljavax_lang_model_element_Element_2(stA0,stA1, stA2);
var lcA12 = stA0;
var stA0 = invoker.openWriter__Ljava_io_Writer_2(lcA12);
var lcA13 = stA0;
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA13,"package ");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA7);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,";\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA13,"/** @see ");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA10);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0," */\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA13,"abstract class ");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA11);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0," implements com.dukescript.api.javafx.beans.FXBeanInfo.Provider {\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA13,"    private com.dukescript.api.javafx.beans.FXBeanInfo info;\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA13,"    protected ");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA11);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,"() {\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA13,"        com.dukescript.api.javafx.beans.FXBeanInfo.newBuilder(this).build();\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA13,"    }\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA13,"\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA13,"    @java.lang.Override\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA13,"    public com.dukescript.api.javafx.beans.FXBeanInfo getFXBeanInfo() {\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA13,"      if (info == null) {\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA13,"        ");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA10);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0," obj = (");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA10);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,") this;\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA13,"        com.dukescript.api.javafx.beans.FXBeanInfo.Builder b = com.dukescript.api.javafx.beans.FXBeanInfo.newBuilder(obj);\n");
var stA0 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA0);
var lcA14 = stA0;
c.registerProperties__VLjava_io_Writer_2Ljava_lang_String_2Ljavax_lang_model_element_TypeElement_2Ljava_util_Map_2_3Z.call(lcA0, lcA13, "        ", lcA8, lcA14, lcA3);
c.registerMethods__VLjava_io_Writer_2Ljava_lang_String_2Ljavax_lang_model_element_TypeElement_2Ljava_util_Map_2_3Z.call(lcA0, lcA13, "        ", lcA8, lcA14, lcA3);
var stA0 = invoker.entrySet__Ljava_util_Set_2(lcA14);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA15 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 667; break IF; }}
throw e;
}    }
    X_498: for (;;) { IF: if (gt <= 498) {
try {
var stI0 = invoker.hasNext__Z(lcA15);
if ((stI0) == 0) { gt = 619; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA15);
if (stA0 !== null && !stA0['$instOf_java_util_Map$Entry']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Map$Entry');
var lcA16 = stA0;
var stA0 = invoker.getKey__Ljava_lang_Object_2(lcA16);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var lcA17 = stA0;
var stA0 = invoker.getValue__Ljava_lang_Object_2(lcA16);
if (stA0 !== null && !stA0['$instOf_java_util_List']) vm.java_lang_Class(false).castEx(stA0, 'java.util.List');
var lcA18 = stA0;
var stI0 = invoker.size__I(lcA18);
if ((stI0) <= (1)) { gt = 616; break IF; }
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA18);
var lcA19 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 667; break IF; }}
throw e;
}    }
    X_564: for (;;) { IF: if (gt <= 564) {
try {
var stI0 = invoker.hasNext__Z(lcA19);
if ((stI0) == 0) { gt = 616; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA19);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_Element']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.Element');
var lcA20 = stA0;
var stA0 = lcA0;var stA1 = lcA20;var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA17);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2," is defined multiple times");
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
c.emitErrorOn__VLjavax_lang_model_element_Element_2Ljava_lang_String_2_3Z.call(stA0, stA1, stA2, lcA3);
{ gt = 0; continue X_564; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 667; break IF; }}
throw e;
}    }
    X_616: for (;;) { IF: if (gt <= 616) {
try {{ gt = 0; continue X_498; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 667; break IF; }}
throw e;
}    }
    X_619: for (;;) { IF: if (gt <= 619) {
try {
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA13,"        this.info = b.build();\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA13,"      }\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA13,"      return info;\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA13,"    }\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA13,"}\n");
invoker.close__V(lcA13);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 667; break IF; }}
throw e;
}{ gt = 673; break IF; }
    }
    X_667: for (;;) { IF: if (gt <= 667) {
var lcA11 = stA0;
Array.at(lcA3, 0, 0);
    }
    X_673: for (;;) { IF: if (gt <= 673) {
{ gt = 0; continue X_41; }
    }
    X_676: for (;;) { IF: if (gt <= 676) {

return (lcA3[0] || Array.at(lcA3, 0));

    }
}}}}}}}}}}}}}
};
c['process__ZLjava_util_Set_2Ljavax_annotation_processing_RoundEnvironment_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.findPackage__Ljava_lang_String_2Ljavax_lang_model_element_Element_2_3Z = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA1);
if ((stA0) !== ((refs_javax_lang_model_element_ElementKind || (refs_javax_lang_model_element_ElementKind = vm.javax_lang_model_element_ElementKind(false)))['_PACKAGE']())) { gt = 25; break IF; }
if (lcA1 !== null && !lcA1['$instOf_javax_lang_model_element_PackageElement']) vm.java_lang_Class(false).castEx(lcA1, 'javax.lang.model.element.PackageElement');
var stA0 = invoker.getQualifiedName__Ljavax_lang_model_element_Name_2(lcA1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
return stA0;
    }
    X_25: for (;;) { IF: if (gt <= 25) {

var stA0 = invoker.getModifiers__Ljava_util_Set_2(lcA1);
var stI0 = invoker.contains__ZLjava_lang_Object_2(stA0,(refs_javax_lang_model_element_Modifier || (refs_javax_lang_model_element_Modifier = vm.javax_lang_model_element_Modifier(false)))['_PRIVATE']());
if ((stI0) == 0) { gt = 52; break IF; }
c.emitErrorOn__VLjavax_lang_model_element_Element_2Ljava_lang_String_2_3Z.call(lcA0, lcA1, "Class cannot be private", lcA2);
return null;
    }
    X_52: for (;;) { IF: if (gt <= 52) {

var stA0 = invoker.getEnclosingElement__Ljavax_lang_model_element_Element_2(lcA1);
var lcA1 = stA0;
{ gt = 0; continue X_0; }

    }
}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.inPackageName__Ljava_lang_String_2Ljavax_lang_model_element_Element_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA2 = stA0;
    }
    X_8: for (;;) { IF: if (gt <= 8) {

var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA1);
if ((stA0) !== ((refs_javax_lang_model_element_ElementKind || (refs_javax_lang_model_element_ElementKind = vm.javax_lang_model_element_ElementKind(false)))['_PACKAGE']())) { gt = 25; break IF; }
var stA0 = invoker.toString__Ljava_lang_String_2(lcA2);
return stA0;
    }
    X_25: for (;;) { IF: if (gt <= 25) {

var stI0 = invoker.length__I(lcA2);
if ((stI0) <= 0) { gt = 40; break IF; }
var stA0 = invoker.insert__Ljava_lang_StringBuilder_2IC(lcA2,0, (46));
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stA0 = lcA2;var stI1 = 0;var stA2 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA1);
var stA0 = invoker.insert__Ljava_lang_StringBuilder_2ILjava_lang_CharSequence_2(stA0,stI1, stA2);
var stA0 = invoker.getEnclosingElement__Ljavax_lang_model_element_Element_2(lcA1);
var lcA1 = stA0;
{ gt = 0; continue X_8; }

    }
}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.emitErrorOn__VLjavax_lang_model_element_Element_2Ljava_lang_String_2_3Z = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2(lcA1,(refs_com_dukescript_impl_javafx_beans_FXBeanInfoProcessor$ExpectError || (refs_com_dukescript_impl_javafx_beans_FXBeanInfoProcessor$ExpectError = com_dukescript_impl_javafx_beans_FXBeanInfoProcessor$ExpectError(false))).constructor.$class);
if (stA0 !== null && !stA0['$instOf_com_dukescript_impl_javafx_beans_FXBeanInfoProcessor$ExpectError']) vm.java_lang_Class(false).castEx(stA0, 'com.dukescript.impl.javafx.beans.FXBeanInfoProcessor$ExpectError');
var lcA4 = stA0;
if ((lcA4) === null) { gt = 65; break IF; }
var stA0 = lcA4.value___3Ljava_lang_String_2();
var lcA5 = stA0;
var lcI6 = (lcA5).length;
var lcI7 = 0;
    }
    X_35: for (;;) { IF: if (gt <= 35) {

if ((lcI7) >= (lcI6)) { gt = 65; break IF; }
var lcA8 = (lcA5[lcI7] || Array.at(lcA5, lcI7));
var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA8,lcA2);
if ((stI0) == 0) { gt = 59; break IF; }
return;
    }
    X_59: for (;;) { IF: if (gt <= 59) {
lcI7++;
{ gt = 0; continue X_35; }
    }
    X_65: for (;;) { IF: if (gt <= 65) {

var stA0 = invoker.getMessager__Ljavax_annotation_processing_Messager_2(c['_processingEnv'].call(lcA0));
invoker.printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2Ljavax_lang_model_element_Element_2(stA0,(refs_javax_tools_Diagnostic$Kind || (refs_javax_tools_Diagnostic$Kind = vm.javax_tools_Diagnostic$Kind(false)))['_ERROR'](), lcA2, lcA1);
Array.at(lcA3, 0, 0);
return;

    }
}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.registerProperties__VLjava_io_Writer_2Ljava_lang_String_2Ljavax_lang_model_element_TypeElement_2Ljava_util_Map_2_3Z = function(lcA1, lcA2, lcA3, lcA4, lcA5) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getElementUtils__Ljavax_lang_model_util_Elements_2(c['_processingEnv'].call(lcA0));
var lcA6 = stA0;
var stA0 = invoker.getTypeUtils__Ljavax_lang_model_util_Types_2(c['_processingEnv'].call(lcA0));
var lcA7 = stA0;
var lcA8 = "javafx.beans.value.ObservableValue";
var stA0 = invoker.getTypeElement__Ljavax_lang_model_element_TypeElement_2Ljava_lang_CharSequence_2(lcA6,"javafx.beans.value.ObservableValue");
var lcA9 = stA0;
if ((lcA9) !== null) { gt = 51; break IF; }
c.emitErrorOn__VLjavax_lang_model_element_Element_2Ljava_lang_String_2_3Z.call(lcA0, lcA3, "Cannot find javafx.beans.value.ObservableValue", lcA5);
    }
    X_51: for (;;) { IF: if (gt <= 51) {

var stA0 = lcA7;var stA1 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA9);
var stA0 = invoker.erasure__Ljavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2(stA0,stA1);
var lcA10 = stA0;
var stA0 = invoker.getEnclosedElements__Ljava_util_List_2(lcA3);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA11 = stA0;
    }
    X_80: for (;;) { IF: if (gt <= 80) {

var stI0 = invoker.hasNext__Z(lcA11);
if ((stI0) == 0) { gt = 259; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA11);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_Element']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.Element');
var lcA12 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA12);
if ((stA0) === ((refs_javax_lang_model_element_ElementKind || (refs_javax_lang_model_element_ElementKind = vm.javax_lang_model_element_ElementKind(false)))['_FIELD']())) { gt = 118; break IF; }
{ gt = 0; continue X_80; }
    }
    X_118: for (;;) { IF: if (gt <= 118) {

var stA0 = invoker.getModifiers__Ljava_util_Set_2(lcA12);
var stI0 = invoker.contains__ZLjava_lang_Object_2(stA0,(refs_javax_lang_model_element_Modifier || (refs_javax_lang_model_element_Modifier = vm.javax_lang_model_element_Modifier(false)))['_PRIVATE']());
if ((stI0) == 0) { gt = 139; break IF; }
{ gt = 0; continue X_80; }
    }
    X_139: for (;;) { IF: if (gt <= 139) {

var stA0 = lcA7;var stA1 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA12);
var stA0 = invoker.erasure__Ljavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2(stA0,stA1);
var lcA13 = stA0;
var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA12);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA14 = stA0;
var stI0 = invoker.isAssignable__ZLjavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2(lcA7,lcA13, lcA10);
if ((stI0) != 0) { gt = 215; break IF; }
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA1,lcA2);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,"b.constant(\"");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA14);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,"\", obj.");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA14);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,");\n");
{ gt = 246; break IF; }
    }
    X_215: for (;;) { IF: if (gt <= 215) {

var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA1,lcA2);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,"b.property(\"");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA14);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,"\", obj.");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA14);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,");\n");
    }
    X_246: for (;;) { IF: if (gt <= 246) {

var stI0 = c.appendElement__ZLjava_util_Map_2Ljava_lang_String_2Ljavax_lang_model_element_Element_2(lcA4, lcA14, lcA12);
{ gt = 0; continue X_80; }
    }
    X_259: for (;;) { IF: if (gt <= 259) {
return;

    }
}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.appendElement__ZLjava_util_Map_2Ljava_lang_String_2Ljavax_lang_model_element_Element_2 = function(lcA0, lcA1, lcA2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA0,lcA1);
if (stA0 !== null && !stA0['$instOf_java_util_List']) vm.java_lang_Class(false).castEx(stA0, 'java.util.List');
var lcA3 = stA0;
if ((lcA3) !== null) { gt = 32; break IF; }
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA3 = stA0;
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0,lcA1, lcA3);
    }
    X_32: for (;;) { IF: if (gt <= 32) {

var stI0 = invoker.add__ZLjava_lang_Object_2(lcA3,lcA2);
var stI0 = invoker.size__I(lcA3);
if ((stI0) != (1)) { gt = 54; break IF; }
var stI0 = 1;{ gt = 55; break IF; }
    }
    X_54: for (;;) { IF: if (gt <= 54) {

var stI0 = 0;    }
    X_55: for (;;) { IF: if (gt <= 55) {
return stI0;

    }
}}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.registerMethods__VLjava_io_Writer_2Ljava_lang_String_2Ljavax_lang_model_element_TypeElement_2Ljava_util_Map_2_3Z = function(lcA1, lcA2, lcA3, lcA4, lcA5) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getElementUtils__Ljavax_lang_model_util_Elements_2(c['_processingEnv'].call(lcA0));
var lcA6 = stA0;
var stA0 = invoker.getTypeUtils__Ljavax_lang_model_util_Types_2(c['_processingEnv'].call(lcA0));
var lcA7 = stA0;
var lcA8 = "javafx.event.ActionEvent";
var stA0 = invoker.getTypeElement__Ljavax_lang_model_element_TypeElement_2Ljava_lang_CharSequence_2(lcA6,"javafx.event.ActionEvent");
var lcA9 = stA0;
if ((lcA9) !== null) { gt = 51; break IF; }
c.emitErrorOn__VLjavax_lang_model_element_Element_2Ljava_lang_String_2_3Z.call(lcA0, lcA3, "Cannot find javafx.event.ActionEvent", lcA5);
    }
    X_51: for (;;) { IF: if (gt <= 51) {

var stA0 = lcA7;var stA1 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA9);
var stA0 = invoker.erasure__Ljavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2(stA0,stA1);
var lcA10 = stA0;
var stA0 = invoker.getEnclosedElements__Ljava_util_List_2(lcA3);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA11 = stA0;
    }
    X_80: for (;;) { IF: if (gt <= 80) {

var stI0 = invoker.hasNext__Z(lcA11);
if ((stI0) == 0) { gt = 337; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA11);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_Element']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.Element');
var lcA12 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA12);
if ((stA0) === ((refs_javax_lang_model_element_ElementKind || (refs_javax_lang_model_element_ElementKind = vm.javax_lang_model_element_ElementKind(false)))['_METHOD']())) { gt = 118; break IF; }
{ gt = 0; continue X_80; }
    }
    X_118: for (;;) { IF: if (gt <= 118) {

var stA0 = invoker.getModifiers__Ljava_util_Set_2(lcA12);
var stI0 = invoker.contains__ZLjava_lang_Object_2(stA0,(refs_javax_lang_model_element_Modifier || (refs_javax_lang_model_element_Modifier = vm.javax_lang_model_element_Modifier(false)))['_PRIVATE']());
if ((stI0) == 0) { gt = 139; break IF; }
{ gt = 0; continue X_80; }
    }
    X_139: for (;;) { IF: if (gt <= 139) {

var stA0 = invoker.getModifiers__Ljava_util_Set_2(lcA12);
var stI0 = invoker.contains__ZLjava_lang_Object_2(stA0,(refs_javax_lang_model_element_Modifier || (refs_javax_lang_model_element_Modifier = vm.javax_lang_model_element_Modifier(false)))['_STATIC']());
if ((stI0) == 0) { gt = 160; break IF; }
{ gt = 0; continue X_80; }
    }
    X_160: for (;;) { IF: if (gt <= 160) {

if (lcA12 !== null && !lcA12['$instOf_javax_lang_model_element_ExecutableElement']) vm.java_lang_Class(false).castEx(lcA12, 'javax.lang.model.element.ExecutableElement');
var lcA13 = lcA12;
var stA0 = invoker.getReturnType__Ljavax_lang_model_type_TypeMirror_2(lcA13);
var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(stA0);
if ((stA0) === ((refs_javax_lang_model_type_TypeKind || (refs_javax_lang_model_type_TypeKind = vm.javax_lang_model_type_TypeKind(false)))['_VOID']())) { gt = 188; break IF; }
{ gt = 0; continue X_80; }
    }
    X_188: for (;;) { IF: if (gt <= 188) {

var stA0 = invoker.getParameters__Ljava_util_List_2(lcA13);
var stI0 = invoker.size__I(stA0);
switch (stI0) {
  case 0: { gt = 228; break IF; }
  case 1: { gt = 231; break IF; }
  default: { gt = 267; break IF; }
}
    }
    X_228: for (;;) { IF: if (gt <= 228) {
{ gt = 270; break IF; }
    }
    X_231: for (;;) { IF: if (gt <= 231) {

var stA0 = lcA7;var stA1 = invoker.getParameters__Ljava_util_List_2(lcA13);
var stA1 = invoker.get__Ljava_lang_Object_2I(stA1,0);
if (stA1 !== null && !stA1['$instOf_javax_lang_model_element_VariableElement']) vm.java_lang_Class(false).castEx(stA1, 'javax.lang.model.element.VariableElement');
var stA1 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(stA1);
var stI0 = invoker.isAssignable__ZLjavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2(stA0,stA1, lcA10);
if ((stI0) == 0) { gt = 267; break IF; }
{ gt = 270; break IF; }
    }
    X_267: for (;;) { IF: if (gt <= 267) {
{ gt = 0; continue X_80; }
    }
    X_270: for (;;) { IF: if (gt <= 270) {

var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA12);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA14 = stA0;
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA1,lcA2);
var stI0 = c.appendElement__ZLjava_util_Map_2Ljava_lang_String_2Ljavax_lang_model_element_Element_2(lcA4, lcA14, lcA12);
if ((stI0) != 0) { gt = 307; break IF; }
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA1,"// ");
    }
    X_307: for (;;) { IF: if (gt <= 307) {

var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA1,"b.action(\"");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA14);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,"\", obj::");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA14);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,");\n");
{ gt = 0; continue X_80; }
    }
    X_337: for (;;) { IF: if (gt <= 337) {
return;

    }
}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    c.constructor = CLS;
    function com_dukescript_impl_javafx_beans_FXBeanInfoProcessorfillInstOf(x) {
        Object.defineProperty(x, '$instOf_com_dukescript_impl_javafx_beans_FXBeanInfoProcessor', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: com_dukescript_impl_javafx_beans_FXBeanInfoProcessorfillInstOf });
    com_dukescript_impl_javafx_beans_FXBeanInfoProcessorfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'com/dukescript/impl/javafx/beans/FXBeanInfoProcessor';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    CLS.$class.anno = {"Ljavax/annotation/processing/SupportedAnnotationTypes;" : {
"value" : ["com.dukescript.api.javafx.beans.FXBeanInfo.Generate"]
}

    };
    var refs_javax_annotation_processing_AbstractProcessor;
    var refs_javax_lang_model_SourceVersion;
    var refs_com_dukescript_api_javafx_beans_FXBeanInfo$Generate;
    var refs_javax_lang_model_element_ElementKind;
    var refs_java_lang_StringBuilder;
    var refs_java_util_HashMap;
    var refs_javax_lang_model_element_Modifier;
    var refs_com_dukescript_impl_javafx_beans_FXBeanInfoProcessor$ExpectError;
    var refs_javax_tools_Diagnostic$Kind;
    var refs_java_util_ArrayList;
    var refs_javax_lang_model_type_TypeKind;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.com_dukescript_impl_javafx_beans_FXBeanInfoProcessor = registerClass(exports,'com_dukescript_impl_javafx_beans_FXBeanInfoProcessor',com_dukescript_impl_javafx_beans_FXBeanInfoProcessor);

vm.javax_annotation_processing_SupportedAnnotationTypes = link('javax/annotation/processing/SupportedAnnotationTypes', function(f) { vm.javax_annotation_processing_SupportedAnnotationTypes =  f; });
vm.javax_lang_model_type_TypeKind = link('javax/lang/model/type/TypeKind', function(f) { vm.javax_lang_model_type_TypeKind =  f; });
vm.javax_tools_Diagnostic$Kind = link('javax/tools/Diagnostic$Kind', function(f) { vm.javax_tools_Diagnostic$Kind =  f; });
vm.javax_lang_model_element_Modifier = link('javax/lang/model/element/Modifier', function(f) { vm.javax_lang_model_element_Modifier =  f; });
vm.java_io_IOException = link('java/io/IOException', function(f) { vm.java_io_IOException =  f; });
vm.java_util_HashMap = link('java/util/HashMap', function(f) { vm.java_util_HashMap =  f; });
vm.javax_lang_model_element_ElementKind = link('javax/lang/model/element/ElementKind', function(f) { vm.javax_lang_model_element_ElementKind =  f; });
vm.javax_lang_model_SourceVersion = link('javax/lang/model/SourceVersion', function(f) { vm.javax_lang_model_SourceVersion =  f; });
vm.javax_annotation_processing_AbstractProcessor = link('javax/annotation/processing/AbstractProcessor', function(f) { vm.javax_annotation_processing_AbstractProcessor =  f; });

function com_dukescript_impl_javafx_beans_FXHtml4Java() {
  var m;
  var CLS = com_dukescript_impl_javafx_beans_FXHtml4Java;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPES'] = null;
  m = c._TYPES = function (v) {  if (arguments.length == 1) CLS['fld_TYPES'] = v; return CLS['fld_TYPES']; };
  m = c._propertyNames = function (v) {  if (arguments.length == 1) this['fld_com_dukescript_impl_javafx_beans_FXHtml4Java_propertyNames'] = v; return this['fld_com_dukescript_impl_javafx_beans_FXHtml4Java_propertyNames']; };
  m = c._functionNames = function (v) {  if (arguments.length == 1) this['fld_com_dukescript_impl_javafx_beans_FXHtml4Java_functionNames'] = v; return this['fld_com_dukescript_impl_javafx_beans_FXHtml4Java_functionNames']; };
    m = c.findProto__Lorg_netbeans_html_json_spi_Proto_2Lcom_dukescript_api_javafx_beans_FXBeanInfo_2Ljava_util_List_2Ljava_util_List_2 = function(lcA0, lcA1, lcA2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.getBean__Ljava_lang_Object_2();
var stA0 = invoker.getClass__Ljava_lang_Class_2(stA0);
var lcA3 = stA0;
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(c._TYPES(),lcA3);
if (stA0 !== null && !stA0['$instOf_com_dukescript_impl_javafx_beans_FXHtml4Java']) vm.java_lang_Class(false).castEx(stA0, 'com.dukescript.impl.javafx.beans.FXHtml4Java');
var lcA4 = stA0;
if ((lcA4) !== null) { gt = 76; break IF; }
var stA0 = invoker.asSubclass__Ljava_lang_Class_2Ljava_lang_Class_2(lcA3,(refs_com_dukescript_api_javafx_beans_FXBeanInfo$Provider || (refs_com_dukescript_api_javafx_beans_FXBeanInfo$Provider = com_dukescript_api_javafx_beans_FXBeanInfo$Provider(false))).constructor.$class);
var lcA5 = stA0;
var stA0 = new com_dukescript_impl_javafx_beans_FXHtml4Java;
var stA1 = stA0;var stA2 = lcA5;var stA3 = lcA0.getProperties__Ljava_util_Map_2();
var stI3 = invoker.size__I(stA3);
var stA4 = lcA0.getActions__Ljava_util_Map_2();
var stI4 = invoker.size__I(stA4);
c.constructor.cons__VLjava_lang_Class_2II.call(stA1, stA2, stI3, stI4);
var lcA4 = stA0;
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(c._TYPES(),lcA3, lcA4);
    }
    X_76: for (;;) { IF: if (gt <= 76) {

c.registerProperties__VLcom_dukescript_api_javafx_beans_FXBeanInfo_2Ljava_util_List_2.call(lcA4, lcA0, lcA1);
c.registerFunctions__VLcom_dukescript_api_javafx_beans_FXBeanInfo_2Ljava_util_List_2.call(lcA4, lcA0, lcA2);
var stA0 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](lcA3);
var lcA5 = stA0;
var stA0 = lcA4;var stA1 = lcA0.getBean__Ljava_lang_Object_2();
var stA0 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(stA0,stA1, lcA5);
return stA0;

    }
}}
};
    m.access = 40;
    m.cls = CLS;
    m = CLS.cons__VLjava_lang_Class_2II = function(lcA1, lcI2, lcI3) {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, lcA1, lcA1, lcI2, lcI3);
var stA0 = lcA0;var stA1 = new vm.java_util_LinkedHashSet;
(refs_java_util_LinkedHashSet || (refs_java_util_LinkedHashSet = vm.java_util_LinkedHashSet(false))).constructor['cons__V'].call(stA1);
stA0['fld_com_dukescript_impl_javafx_beans_FXHtml4Java_propertyNames'] = stA1;
var stA0 = lcA0;var stA1 = new vm.java_util_LinkedHashSet;
(refs_java_util_LinkedHashSet || (refs_java_util_LinkedHashSet = vm.java_util_LinkedHashSet(false))).constructor['cons__V'].call(stA1);
stA0['fld_com_dukescript_impl_javafx_beans_FXHtml4Java_functionNames'] = stA1;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.registerFunctions__VLcom_dukescript_api_javafx_beans_FXBeanInfo_2Ljava_util_List_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA1.getActions__Ljava_util_Map_2();
var stA0 = invoker.entrySet__Ljava_util_Set_2(stA0);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA3 = stA0;
    }
    X_15: for (;;) { IF: if (gt <= 15) {

var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 83; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_java_util_Map$Entry']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Map$Entry');
var lcA4 = stA0;
var stA0 = invoker.getKey__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var lcA5 = stA0;
var stI0 = invoker.size__I(lcA0['fld_com_dukescript_impl_javafx_beans_FXHtml4Java_functionNames']);
var lcI6 = stI0;
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA0['fld_com_dukescript_impl_javafx_beans_FXHtml4Java_functionNames'],lcA5);
if ((stI0) == 0) { gt = 80; break IF; }
invoker.registerFunction__VLjava_lang_String_2I(lcA0,lcA5, lcI6);
    }
    X_80: for (;;) { IF: if (gt <= 80) {
{ gt = 0; continue X_15; }
    }
    X_83: for (;;) { IF: if (gt <= 83) {

var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA0['fld_com_dukescript_impl_javafx_beans_FXHtml4Java_functionNames']);
var lcA3 = stA0;
    }
    X_93: for (;;) { IF: if (gt <= 93) {

var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 134; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var lcA4 = stA0;
var stA0 = lcA2;var stA1 = lcA1.getActions__Ljava_util_Map_2();
var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(stA1,lcA4);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
{ gt = 0; continue X_93; }
    }
    X_134: for (;;) { IF: if (gt <= 134) {
return;

    }
}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.registerProperties__VLcom_dukescript_api_javafx_beans_FXBeanInfo_2Ljava_util_List_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA1.getProperties__Ljava_util_Map_2();
var stA0 = invoker.entrySet__Ljava_util_Set_2(stA0);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA3 = stA0;
    }
    X_15: for (;;) { IF: if (gt <= 15) {

var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 121; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_java_util_Map$Entry']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Map$Entry');
var lcA4 = stA0;
var stA0 = invoker.getKey__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var lcA5 = stA0;
var stI0 = invoker.size__I(lcA0['fld_com_dukescript_impl_javafx_beans_FXHtml4Java_propertyNames']);
var lcI6 = stI0;
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA0['fld_com_dukescript_impl_javafx_beans_FXHtml4Java_propertyNames'],lcA5);
if ((stI0) == 0) { gt = 118; break IF; }
var stA0 = invoker.getValue__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_javafx_beans_value_ObservableValue']) vm.java_lang_Class(false).castEx(stA0, 'javafx.beans.value.ObservableValue');
var lcA7 = stA0;
var stI0 = lcA7 != null && lcA7['$instOf_javafx_beans_value_WritableValue'] ? 1 : 0;
if ((stI0) != 0) { gt = 96; break IF; }
var stI0 = 1;{ gt = 97; break IF; }
    }
    X_96: for (;;) { IF: if (gt <= 96) {

var stI0 = 0;    }
    X_97: for (;;) { IF: if (gt <= 97) {
var lcI8 = stI0;
var stI0 = lcA7 != null && lcA7['$instOf_com_dukescript_impl_javafx_beans_ConstantValue'] ? 1 : 0;
var lcI9 = stI0;
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,lcA5, lcI6, lcI8, lcI9);
    }
    X_118: for (;;) { IF: if (gt <= 118) {
{ gt = 0; continue X_15; }
    }
    X_121: for (;;) { IF: if (gt <= 121) {

var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA0['fld_com_dukescript_impl_javafx_beans_FXHtml4Java_propertyNames']);
var lcA3 = stA0;
    }
    X_131: for (;;) { IF: if (gt <= 131) {

var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 172; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var lcA4 = stA0;
var stA0 = lcA2;var stA1 = lcA1.getProperties__Ljava_util_Map_2();
var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(stA1,lcA4);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
{ gt = 0; continue X_131; }
    }
    X_172: for (;;) { IF: if (gt <= 172) {
return;

    }
}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.valueAt__Ljavafx_beans_value_ObservableValue_2Lcom_dukescript_api_javafx_beans_FXBeanInfo$Provider_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getFXBeanInfo__Lcom_dukescript_api_javafx_beans_FXBeanInfo_2(lcA1);
var stA0 = stA0.lookup__Ljava_lang_Object_2Ljava_lang_Class_2((refs_com_dukescript_impl_javafx_beans_FXHtmlAdapter || (refs_com_dukescript_impl_javafx_beans_FXHtmlAdapter = com_dukescript_impl_javafx_beans_FXHtmlAdapter(false))).constructor.$class);
if (stA0 !== null && !stA0['$instOf_com_dukescript_impl_javafx_beans_FXHtmlAdapter']) vm.java_lang_Class(false).castEx(stA0, 'com.dukescript.impl.javafx.beans.FXHtmlAdapter');
var lcA3 = stA0;
if ((lcA3) !== null) { gt = 23; break IF; }
var stA0 = null;{ gt = 36; break IF; }
    }
    X_23: for (;;) { IF: if (gt <= 23) {

var stA0 = invoker.get__Ljava_lang_Object_2I(lcA3['fld_com_dukescript_impl_javafx_beans_FXHtmlAdapter_props'],lcI2);
if (stA0 !== null && !stA0['$instOf_javafx_beans_value_ObservableValue']) vm.java_lang_Class(false).castEx(stA0, 'javafx.beans.value.ObservableValue');
    }
    X_36: for (;;) { IF: if (gt <= 36) {
return stA0;

    }
}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLcom_dukescript_api_javafx_beans_FXBeanInfo$Provider_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = c.valueAt__Ljavafx_beans_value_ObservableValue_2Lcom_dukescript_api_javafx_beans_FXBeanInfo$Provider_2I.call(lcA0, lcA1, lcI2);
var lcA4 = stA0;
var stI0 = lcA4 != null && lcA4['$instOf_javafx_beans_property_Property'] ? 1 : 0;
if ((stI0) == 0) { gt = 27; break IF; }
if (lcA4 !== null && !lcA4['$instOf_javafx_beans_property_Property']) vm.java_lang_Class(false).castEx(lcA4, 'javafx.beans.property.Property');
invoker.setValue__VLjava_lang_Object_2(lcA4,lcA3);
    }
    X_27: for (;;) { IF: if (gt <= 27) {
return;

    }
}}
};
    m.access = 4;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lcom_dukescript_api_javafx_beans_FXBeanInfo$Provider_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = c.valueAt__Ljavafx_beans_value_ObservableValue_2Lcom_dukescript_api_javafx_beans_FXBeanInfo$Provider_2I.call(lcA0, lcA1, lcI2);
var lcA3 = stA0;
var stA0 = invoker.getValue__Ljava_lang_Object_2(lcA3);
return stA0;

};
    m.access = 4;
    m.cls = CLS;
    m = c.call__VLcom_dukescript_api_javafx_beans_FXBeanInfo$Provider_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getFXBeanInfo__Lcom_dukescript_api_javafx_beans_FXBeanInfo_2(lcA1);
var stA0 = stA0.lookup__Ljava_lang_Object_2Ljava_lang_Class_2((refs_com_dukescript_impl_javafx_beans_FXHtmlAdapter || (refs_com_dukescript_impl_javafx_beans_FXHtmlAdapter = com_dukescript_impl_javafx_beans_FXHtmlAdapter(false))).constructor.$class);
if (stA0 !== null && !stA0['$instOf_com_dukescript_impl_javafx_beans_FXHtmlAdapter']) vm.java_lang_Class(false).castEx(stA0, 'com.dukescript.impl.javafx.beans.FXHtmlAdapter');
var lcA6 = stA0;
if ((lcA6) === null) { gt = 69; break IF; }
var stA0 = invoker.get__Ljava_lang_Object_2I(lcA6['fld_com_dukescript_impl_javafx_beans_FXHtmlAdapter_funcs'],lcI2);
if (stA0 !== null && !stA0['$instOf_javafx_beans_property_ReadOnlyProperty']) vm.java_lang_Class(false).castEx(stA0, 'javafx.beans.property.ReadOnlyProperty');
var lcA5 = stA0;
var stA0 = invoker.getValue__Ljava_lang_Object_2(lcA5);
if (stA0 !== null && !stA0['$instOf_javafx_event_EventHandler']) vm.java_lang_Class(false).castEx(stA0, 'javafx.event.EventHandler');
var lcA7 = stA0;
if ((lcA7) === null) { gt = 69; break IF; }
var stA0 = lcA7;var stA1 = (refs_com_dukescript_impl_javafx_beans_ActionDataEventFactory || (refs_com_dukescript_impl_javafx_beans_ActionDataEventFactory = com_dukescript_impl_javafx_beans_ActionDataEventFactory(false))).newEvent__Lcom_dukescript_api_javafx_beans_ActionDataEvent_2Lcom_dukescript_impl_javafx_beans_ActionDataEventFactory$Convertor_2Lcom_dukescript_api_javafx_beans_FXBeanInfo$Provider_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0, lcA1, lcA3, lcA4);
invoker.handle__VLjavafx_event_Event_2(stA0,stA1);
    }
    X_69: for (;;) { IF: if (gt <= 69) {
return;

    }
}}
};
    m.access = 4;
    m.cls = CLS;
    m = c.cloneTo__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Provider_2Lcom_dukescript_api_javafx_beans_FXBeanInfo$Provider_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__VLjava_lang_String_2'].call(stA0, "cloneTo");
{ var stA0 = stA0; throw stA0; }

};
    m.access = 4;
    m.cls = CLS;
    m = c.read__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Provider_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__VLjava_lang_String_2'].call(stA0, "read");
{ var stA0 = stA0; throw stA0; }

};
    m.access = 4;
    m.cls = CLS;
    m = c.onChange__VLcom_dukescript_api_javafx_beans_FXBeanInfo$Provider_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__VLjava_lang_String_2'].call(stA0, "onChange");
{ var stA0 = stA0; throw stA0; }

};
    m.access = 4;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA1 != null && lcA1['$instOf_com_dukescript_api_javafx_beans_FXBeanInfo$Provider'] ? 1 : 0;
if ((stI0) == 0) { gt = 36; break IF; }
if (lcA1 !== null && !lcA1['$instOf_com_dukescript_api_javafx_beans_FXBeanInfo$Provider']) vm.java_lang_Class(false).castEx(lcA1, 'com.dukescript.api.javafx.beans.FXBeanInfo$Provider');
var lcA2 = lcA1;
var stA0 = invoker.getFXBeanInfo__Lcom_dukescript_api_javafx_beans_FXBeanInfo_2(lcA2);
var stA0 = stA0.lookup__Ljava_lang_Object_2Ljava_lang_Class_2((refs_com_dukescript_impl_javafx_beans_FXHtmlAdapter || (refs_com_dukescript_impl_javafx_beans_FXHtmlAdapter = com_dukescript_impl_javafx_beans_FXHtmlAdapter(false))).constructor.$class);
if (stA0 !== null && !stA0['$instOf_com_dukescript_impl_javafx_beans_FXHtmlAdapter']) vm.java_lang_Class(false).castEx(stA0, 'com.dukescript.impl.javafx.beans.FXHtmlAdapter');
var lcA3 = stA0;
if ((lcA3) === null) { gt = 36; break IF; }
return lcA3['fld_com_dukescript_impl_javafx_beans_FXHtmlAdapter_proto'];
    }
    X_36: for (;;) { IF: if (gt <= 36) {

return null;

    }
}}
};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 4;
    m.cls = CLS;
    m = c.toString__Ljava_lang_Object_2Lcom_dukescript_api_javafx_beans_FXBeanInfo_2Ljava_lang_Object_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA1.lookup__Ljava_lang_Object_2Ljava_lang_Class_2((refs_com_dukescript_impl_javafx_beans_FXHtmlAdapter || (refs_com_dukescript_impl_javafx_beans_FXHtmlAdapter = com_dukescript_impl_javafx_beans_FXHtmlAdapter(false))).constructor.$class);
if (stA0 !== null && !stA0['$instOf_com_dukescript_impl_javafx_beans_FXHtmlAdapter']) vm.java_lang_Class(false).castEx(stA0, 'com.dukescript.impl.javafx.beans.FXHtmlAdapter');
var lcA4 = stA0;
if ((lcA4) === null) { gt = 27; break IF; }
var stA0 = invoker.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2(lcA4['fld_com_dukescript_impl_javafx_beans_FXHtmlAdapter_proto'],lcA2, lcA3);
return stA0;
    }
    X_27: for (;;) { IF: if (gt <= 27) {

return null;

    }
}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.toNumber__Ljava_lang_Object_2Lcom_dukescript_api_javafx_beans_FXBeanInfo_2Ljava_lang_Object_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA1.lookup__Ljava_lang_Object_2Ljava_lang_Class_2((refs_com_dukescript_impl_javafx_beans_FXHtmlAdapter || (refs_com_dukescript_impl_javafx_beans_FXHtmlAdapter = com_dukescript_impl_javafx_beans_FXHtmlAdapter(false))).constructor.$class);
if (stA0 !== null && !stA0['$instOf_com_dukescript_impl_javafx_beans_FXHtmlAdapter']) vm.java_lang_Class(false).castEx(stA0, 'com.dukescript.impl.javafx.beans.FXHtmlAdapter');
var lcA4 = stA0;
if ((lcA4) === null) { gt = 27; break IF; }
var stA0 = invoker.toNumber__Ljava_lang_Number_2Ljava_lang_Object_2Ljava_lang_String_2(lcA4['fld_com_dukescript_impl_javafx_beans_FXHtmlAdapter_proto'],lcA2, lcA3);
return stA0;
    }
    X_27: for (;;) { IF: if (gt <= 27) {

return null;

    }
}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.toModel__Ljava_lang_Object_2Lcom_dukescript_api_javafx_beans_FXBeanInfo_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA1.lookup__Ljava_lang_Object_2Ljava_lang_Class_2((refs_com_dukescript_impl_javafx_beans_FXHtmlAdapter || (refs_com_dukescript_impl_javafx_beans_FXHtmlAdapter = com_dukescript_impl_javafx_beans_FXHtmlAdapter(false))).constructor.$class);
if (stA0 !== null && !stA0['$instOf_com_dukescript_impl_javafx_beans_FXHtmlAdapter']) vm.java_lang_Class(false).castEx(stA0, 'com.dukescript.impl.javafx.beans.FXHtmlAdapter');
var lcA4 = stA0;
if ((lcA4) === null) { gt = 27; break IF; }
var stA0 = invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA4['fld_com_dukescript_impl_javafx_beans_FXHtmlAdapter_proto'],lcA2, lcA3);
return stA0;
    }
    X_27: for (;;) { IF: if (gt <= 27) {

return null;

    }
}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_com_dukescript_api_javafx_beans_FXBeanInfo$Provider']) vm.java_lang_Class(false).castEx(lcA1, 'com.dukescript.api.javafx.beans.FXBeanInfo$Provider');
lcA0.onChange__VLcom_dukescript_api_javafx_beans_FXBeanInfo$Provider_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4164;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Provider_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4164;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_com_dukescript_api_javafx_beans_FXBeanInfo$Provider']) vm.java_lang_Class(false).castEx(lcA1, 'com.dukescript.api.javafx.beans.FXBeanInfo$Provider');
var stA0 = lcA0.cloneTo__Lcom_dukescript_api_javafx_beans_FXBeanInfo$Provider_2Lcom_dukescript_api_javafx_beans_FXBeanInfo$Provider_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4164;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_com_dukescript_api_javafx_beans_FXBeanInfo$Provider']) vm.java_lang_Class(false).castEx(lcA1, 'com.dukescript.api.javafx.beans.FXBeanInfo$Provider');
lcA0.call__VLcom_dukescript_api_javafx_beans_FXBeanInfo$Provider_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4164;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_com_dukescript_api_javafx_beans_FXBeanInfo$Provider']) vm.java_lang_Class(false).castEx(lcA1, 'com.dukescript.api.javafx.beans.FXBeanInfo$Provider');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lcom_dukescript_api_javafx_beans_FXBeanInfo$Provider_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4164;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_com_dukescript_api_javafx_beans_FXBeanInfo$Provider']) vm.java_lang_Class(false).castEx(lcA1, 'com.dukescript.api.javafx.beans.FXBeanInfo$Provider');
lcA0.setValue__VLcom_dukescript_api_javafx_beans_FXBeanInfo$Provider_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4164;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA0);
c._TYPES(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function com_dukescript_impl_javafx_beans_FXHtml4JavafillInstOf(x) {
        Object.defineProperty(x, '$instOf_com_dukescript_impl_javafx_beans_FXHtml4Java', { value : true });
      vm.com_dukescript_impl_javafx_beans_ActionDataEventFactory$Convertor(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: com_dukescript_impl_javafx_beans_FXHtml4JavafillInstOf });
    com_dukescript_impl_javafx_beans_FXHtml4JavafillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'com/dukescript/impl/javafx/beans/FXHtml4Java';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        com_dukescript_impl_javafx_beans_ActionDataEventFactory$Convertor(false).constructor.$class
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_com_dukescript_api_javafx_beans_FXBeanInfo$Provider;
    var refs_net_java_html_BrwsrCtx;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_java_util_LinkedHashSet;
    var refs_com_dukescript_impl_javafx_beans_FXHtmlAdapter;
    var refs_com_dukescript_impl_javafx_beans_ActionDataEventFactory;
    var refs_java_lang_UnsupportedOperationException;
    var refs_java_util_HashMap;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_com_dukescript_impl_javafx_beans_FXHtml4Java_propertyNames'] = null;
    this['fld_com_dukescript_impl_javafx_beans_FXHtml4Java_functionNames'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.com_dukescript_impl_javafx_beans_FXHtml4Java = com_dukescript_impl_javafx_beans_FXHtml4Java;

vm.java_lang_UnsupportedOperationException = link('java/lang/UnsupportedOperationException', function(f) { vm.java_lang_UnsupportedOperationException =  f; });

function com_dukescript_impl_javafx_beans_FXHtmlAdapter() {
  var m;
  var CLS = com_dukescript_impl_javafx_beans_FXHtmlAdapter;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._listener = function (v) {  if (arguments.length == 1) this['fld_com_dukescript_impl_javafx_beans_FXHtmlAdapter_listener'] = v; return this['fld_com_dukescript_impl_javafx_beans_FXHtmlAdapter_listener']; };
  m = c._properties = function (v) {  if (arguments.length == 1) this['fld_com_dukescript_impl_javafx_beans_FXHtmlAdapter_properties'] = v; return this['fld_com_dukescript_impl_javafx_beans_FXHtmlAdapter_properties']; };
  m = c._props = function (v) {  if (arguments.length == 1) this['fld_com_dukescript_impl_javafx_beans_FXHtmlAdapter_props'] = v; return this['fld_com_dukescript_impl_javafx_beans_FXHtmlAdapter_props']; };
  m = c._funcs = function (v) {  if (arguments.length == 1) this['fld_com_dukescript_impl_javafx_beans_FXHtmlAdapter_funcs'] = v; return this['fld_com_dukescript_impl_javafx_beans_FXHtmlAdapter_funcs']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_com_dukescript_impl_javafx_beans_FXHtmlAdapter_proto'] = v; return this['fld_com_dukescript_impl_javafx_beans_FXHtmlAdapter_proto']; };
    m = CLS.cons__VLcom_dukescript_api_javafx_beans_FXBeanInfo_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0;var stA1 = lcA1.getProperties__Ljava_util_Map_2();
stA0['fld_com_dukescript_impl_javafx_beans_FXHtmlAdapter_properties'] = stA1;
var stA0 = lcA0;var stA1 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA1);
stA0['fld_com_dukescript_impl_javafx_beans_FXHtmlAdapter_props'] = stA1;
var stA0 = lcA0;var stA1 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA1);
stA0['fld_com_dukescript_impl_javafx_beans_FXHtmlAdapter_funcs'] = stA1;
var stA0 = lcA0;var stA1 = new vm.javafx_beans_value_WeakChangeListener;
(refs_javafx_beans_value_WeakChangeListener || (refs_javafx_beans_value_WeakChangeListener = vm.javafx_beans_value_WeakChangeListener(false))).constructor['cons__VLjavafx_beans_value_ChangeListener_2'].call(stA1, lcA0);
stA0['fld_com_dukescript_impl_javafx_beans_FXHtmlAdapter_listener'] = stA1;
var stA0 = invoker.values__Ljava_util_Collection_2(lcA0['fld_com_dukescript_impl_javafx_beans_FXHtmlAdapter_properties']);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA2 = stA0;
    }
    X_61: for (;;) { IF: if (gt <= 61) {

var stI0 = invoker.hasNext__Z(lcA2);
if ((stI0) == 0) { gt = 93; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA2);
if (stA0 !== null && !stA0['$instOf_javafx_beans_value_ObservableValue']) vm.java_lang_Class(false).castEx(stA0, 'javafx.beans.value.ObservableValue');
var lcA3 = stA0;
invoker.addListener__VLjavafx_beans_value_ChangeListener_2(lcA3,lcA0['fld_com_dukescript_impl_javafx_beans_FXHtmlAdapter_listener']);
{ gt = 0; continue X_61; }
    }
    X_93: for (;;) { IF: if (gt <= 93) {

var stA0 = lcA0;var stA1 = (refs_com_dukescript_impl_javafx_beans_FXHtml4Java || (refs_com_dukescript_impl_javafx_beans_FXHtml4Java = com_dukescript_impl_javafx_beans_FXHtml4Java(false))).findProto__Lorg_netbeans_html_json_spi_Proto_2Lcom_dukescript_api_javafx_beans_FXBeanInfo_2Ljava_util_List_2Ljava_util_List_2(lcA1, lcA0['fld_com_dukescript_impl_javafx_beans_FXHtmlAdapter_props'], lcA0['fld_com_dukescript_impl_javafx_beans_FXHtmlAdapter_funcs']);
stA0['fld_com_dukescript_impl_javafx_beans_FXHtmlAdapter_proto'] = stA1;
return;

    }
}}}
};
    m.access = 0;
    m.cls = CLS;
    m = c.changed__VLjavafx_beans_value_ObservableValue_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.entrySet__Ljava_util_Set_2(lcA0['fld_com_dukescript_impl_javafx_beans_FXHtmlAdapter_properties']);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA4 = stA0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 71; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_java_util_Map$Entry']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Map$Entry');
var lcA5 = stA0;
var stA0 = invoker.getValue__Ljava_lang_Object_2(lcA5);
if ((stA0) !== (lcA1)) { gt = 68; break IF; }
var stA0 = lcA0['fld_com_dukescript_impl_javafx_beans_FXHtmlAdapter_proto'];var stA1 = invoker.getKey__Ljava_lang_Object_2(lcA5);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, lcA2, lcA3);
    }
    X_68: for (;;) { IF: if (gt <= 68) {
{ gt = 0; continue X_16; }
    }
    X_71: for (;;) { IF: if (gt <= 71) {
return;

    }
}}}}
};
c['changed__VLjavafx_beans_value_ObservableValue_2Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function com_dukescript_impl_javafx_beans_FXHtmlAdapterfillInstOf(x) {
        Object.defineProperty(x, '$instOf_com_dukescript_impl_javafx_beans_FXHtmlAdapter', { value : true });
      vm.javafx_beans_value_ChangeListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: com_dukescript_impl_javafx_beans_FXHtmlAdapterfillInstOf });
    com_dukescript_impl_javafx_beans_FXHtmlAdapterfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'com/dukescript/impl/javafx/beans/FXHtmlAdapter';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.javafx_beans_value_ChangeListener(false).constructor.$class
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_java_util_ArrayList;
    var refs_javafx_beans_value_WeakChangeListener;
    var refs_com_dukescript_impl_javafx_beans_FXHtml4Java;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_com_dukescript_impl_javafx_beans_FXHtmlAdapter_listener'] = null;
    this['fld_com_dukescript_impl_javafx_beans_FXHtmlAdapter_properties'] = null;
    this['fld_com_dukescript_impl_javafx_beans_FXHtmlAdapter_props'] = null;
    this['fld_com_dukescript_impl_javafx_beans_FXHtmlAdapter_funcs'] = null;
    this['fld_com_dukescript_impl_javafx_beans_FXHtmlAdapter_proto'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.com_dukescript_impl_javafx_beans_FXHtmlAdapter = com_dukescript_impl_javafx_beans_FXHtmlAdapter;

vm.javafx_beans_value_ChangeListener = link('javafx/beans/value/ChangeListener', function(f) { vm.javafx_beans_value_ChangeListener =  f; });
vm.javafx_beans_value_WeakChangeListener = link('javafx/beans/value/WeakChangeListener', function(f) { vm.javafx_beans_value_WeakChangeListener =  f; });
vm.java_util_LinkedHashSet = link('java/util/LinkedHashSet', function(f) { vm.java_util_LinkedHashSet =  f; });
vm.org_netbeans_html_json_spi_Proto$Type = link('org/netbeans/html/json/spi/Proto$Type', function(f) { vm.org_netbeans_html_json_spi_Proto$Type =  f; });
vm.net_java_html_BrwsrCtx = link('net/java/html/BrwsrCtx', function(f) { vm.net_java_html_BrwsrCtx =  f; });

function com_dukescript_impl_javafx_beans_FXHtml4JavaProvider() {
  var m;
  var CLS = com_dukescript_impl_javafx_beans_FXHtml4JavaProvider;
  if (!CLS.$class) {
    var pp = com_dukescript_spi_javafx_beans_FXBeanInfoProvider(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_com_dukescript_spi_javafx_beans_FXBeanInfoProvider || (refs_com_dukescript_spi_javafx_beans_FXBeanInfoProvider = com_dukescript_spi_javafx_beans_FXBeanInfoProvider(false))).constructor.cons__VLjava_lang_Class_2.call(lcA0, (refs_com_dukescript_impl_javafx_beans_FXHtmlAdapter || (refs_com_dukescript_impl_javafx_beans_FXHtmlAdapter = com_dukescript_impl_javafx_beans_FXHtmlAdapter(false))).constructor.$class);
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.findExtraInfo__Lcom_dukescript_impl_javafx_beans_FXHtmlAdapter_2Lcom_dukescript_api_javafx_beans_FXBeanInfo_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
try {var stA0 = new com_dukescript_impl_javafx_beans_FXHtmlAdapter;
(refs_com_dukescript_impl_javafx_beans_FXHtmlAdapter || (refs_com_dukescript_impl_javafx_beans_FXHtmlAdapter = com_dukescript_impl_javafx_beans_FXHtmlAdapter(false))).constructor.cons__VLcom_dukescript_api_javafx_beans_FXBeanInfo_2.call(stA0, lcA1);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_LinkageError']) {var stA0 = e;{ gt = 9; break IF; }}
throw e;
}return stA0;
    }
    X_9: for (;;) { IF: if (gt <= 9) {
var lcA2 = stA0;
return null;

    }
}}
};
c['findExtraInfo__Lcom_dukescript_impl_javafx_beans_FXHtmlAdapter_2Lcom_dukescript_api_javafx_beans_FXBeanInfo_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.findExtraInfo__Ljava_lang_Object_2Lcom_dukescript_api_javafx_beans_FXBeanInfo_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0.findExtraInfo__Lcom_dukescript_impl_javafx_beans_FXHtmlAdapter_2Lcom_dukescript_api_javafx_beans_FXBeanInfo_2(lcA1);
return stA0;

};
c['findExtraInfo__Ljava_lang_Object_2Lcom_dukescript_api_javafx_beans_FXBeanInfo_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    c.constructor = CLS;
    function com_dukescript_impl_javafx_beans_FXHtml4JavaProviderfillInstOf(x) {
        Object.defineProperty(x, '$instOf_com_dukescript_impl_javafx_beans_FXHtml4JavaProvider', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: com_dukescript_impl_javafx_beans_FXHtml4JavaProviderfillInstOf });
    com_dukescript_impl_javafx_beans_FXHtml4JavaProviderfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'com/dukescript/impl/javafx/beans/FXHtml4JavaProvider';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    var refs_com_dukescript_impl_javafx_beans_FXHtmlAdapter;
    var refs_com_dukescript_spi_javafx_beans_FXBeanInfoProvider;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.com_dukescript_impl_javafx_beans_FXHtml4JavaProvider = registerClass(exports,'com_dukescript_impl_javafx_beans_FXHtml4JavaProvider',com_dukescript_impl_javafx_beans_FXHtml4JavaProvider);

vm.java_lang_LinkageError = link('java/lang/LinkageError', function(f) { vm.java_lang_LinkageError =  f; });
  invoker.getFXBeanInfo__Lcom_dukescript_api_javafx_beans_FXBeanInfo_2 = function(target) {
    return target['getFXBeanInfo__Lcom_dukescript_api_javafx_beans_FXBeanInfo_2']();
  };
  invoker.isAssignableFrom__ZLjava_lang_Class_2 = function(target, p1) {
    return target['isAssignableFrom__ZLjava_lang_Class_2'](p1);
  };
  invoker.getSource__Ljava_lang_Object_2 = function(target) {
    return target['getSource__Ljava_lang_Object_2']();
  };
  invoker.desiredAssertionStatus__Z = function(target) {
    return target['desiredAssertionStatus__Z']();
  };
  invoker.getName__Ljava_lang_String_2 = function(target) {
    return target['getName__Ljava_lang_String_2']();
  };
  invoker.getClassLoader__Ljava_lang_ClassLoader_2 = function(target) {
    return target['getClassLoader__Ljava_lang_ClassLoader_2']();
  };
  invoker.toString__Ljava_lang_String_2 = function(target) {
    return target['toString__Ljava_lang_String_2']();
  };
  invoker.isInstance__ZLjava_lang_Object_2 = function(target, p1) {
    return target['isInstance__ZLjava_lang_Object_2'](p1);
  };
  invoker.cast__Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1) {
    return target['cast__Ljava_lang_Object_2Ljava_lang_Object_2'](p1);
  };
  invoker.getBean__Ljava_lang_Object_2 = function(target) {
    return target['getBean__Ljava_lang_Object_2']();
  };
  invoker.getValue__Ljava_lang_Object_2 = function(target) {
    return target['getValue__Ljava_lang_Object_2']();
  };
  invoker.run__V = function(target) {
    return target['run__V']();
  };
  invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2 = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2Ljava_lang_String_2'](p1);
  };
  invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2 = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2'](p1);
  };
  invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.println__VLjava_lang_String_2 = function(target, p1) {
    return target['println__VLjava_lang_String_2'](p1);
  };
  invoker.iterator__Ljava_util_Iterator_2 = function(target) {
    return target['iterator__Ljava_util_Iterator_2']();
  };
  invoker.hasNext__Z = function(target) {
    return target['hasNext__Z']();
  };
  invoker.next__Ljava_lang_Object_2 = function(target) {
    return target['next__Ljava_lang_Object_2']();
  };
  invoker.findExtraInfo__Ljava_lang_Object_2Lcom_dukescript_api_javafx_beans_FXBeanInfo_2 = function(target, p1) {
    return target['findExtraInfo__Ljava_lang_Object_2Lcom_dukescript_api_javafx_beans_FXBeanInfo_2'](p1);
  };
  invoker.add__ZLjava_lang_Object_2 = function(target, p1) {
    return target['add__ZLjava_lang_Object_2'](p1);
  };
  invoker.isEmpty__Z = function(target) {
    return target['isEmpty__Z']();
  };
  invoker.size__I = function(target) {
    return target['size__I']();
  };
  invoker.get__Ljava_lang_Object_2I = function(target, p1) {
    return target['get__Ljava_lang_Object_2I'](p1);
  };
  invoker.toArray___3Ljava_lang_Object_2 = function(target) {
    return target['toArray___3Ljava_lang_Object_2']();
  };
  invoker.isArray__Z = function(target) {
    return target['isArray__Z']();
  };
  invoker.getClass__Ljava_lang_Class_2 = function(target) {
    return target['getClass__Ljava_lang_Class_2']();
  };
  invoker.getElementUtils__Ljavax_lang_model_util_Elements_2 = function(target) {
    return target['getElementUtils__Ljavax_lang_model_util_Elements_2']();
  };
  invoker.getTypeElement__Ljavax_lang_model_element_TypeElement_2Ljava_lang_CharSequence_2 = function(target, p1) {
    return target['getTypeElement__Ljavax_lang_model_element_TypeElement_2Ljava_lang_CharSequence_2'](p1);
  };
  invoker.getElementsAnnotatedWith__Ljava_util_Set_2Ljava_lang_Class_2 = function(target, p1) {
    return target['getElementsAnnotatedWith__Ljava_util_Set_2Ljava_lang_Class_2'](p1);
  };
  invoker.getKind__Ljavax_lang_model_element_ElementKind_2 = function(target) {
    return target['getKind__Ljavax_lang_model_element_ElementKind_2']();
  };
  invoker.getSuperclass__Ljavax_lang_model_type_TypeMirror_2 = function(target) {
    return target['getSuperclass__Ljavax_lang_model_type_TypeMirror_2']();
  };
  invoker.getTypeUtils__Ljavax_lang_model_util_Types_2 = function(target) {
    return target['getTypeUtils__Ljavax_lang_model_util_Types_2']();
  };
  invoker.asElement__Ljavax_lang_model_element_Element_2Ljavax_lang_model_type_TypeMirror_2 = function(target, p1) {
    return target['asElement__Ljavax_lang_model_element_Element_2Ljavax_lang_model_type_TypeMirror_2'](p1);
  };
  invoker.equals__ZLjava_lang_Object_2 = function(target, p1) {
    return target['equals__ZLjava_lang_Object_2'](p1);
  };
  invoker.getSimpleName__Ljavax_lang_model_element_Name_2 = function(target) {
    return target['getSimpleName__Ljavax_lang_model_element_Name_2']();
  };
  invoker.lastIndexOf__II = function(target, p1) {
    return target['lastIndexOf__II'](p1);
  };
  invoker.substring__Ljava_lang_String_2I = function(target, p1) {
    return target['substring__Ljava_lang_String_2I'](p1);
  };
  invoker.getFiler__Ljavax_annotation_processing_Filer_2 = function(target) {
    return target['getFiler__Ljavax_annotation_processing_Filer_2']();
  };
  invoker.createSourceFile__Ljavax_tools_JavaFileObject_2Ljava_lang_CharSequence_2_3Ljavax_lang_model_element_Element_2 = function(target, p1, p2) {
    return target['createSourceFile__Ljavax_tools_JavaFileObject_2Ljava_lang_CharSequence_2_3Ljavax_lang_model_element_Element_2'](p1,p2);
  };
  invoker.openWriter__Ljava_io_Writer_2 = function(target) {
    return target['openWriter__Ljava_io_Writer_2']();
  };
  invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2 = function(target, p1) {
    return target['append__Ljava_io_Writer_2Ljava_lang_CharSequence_2'](p1);
  };
  invoker.entrySet__Ljava_util_Set_2 = function(target) {
    return target['entrySet__Ljava_util_Set_2']();
  };
  invoker.getKey__Ljava_lang_Object_2 = function(target) {
    return target['getKey__Ljava_lang_Object_2']();
  };
  invoker.close__V = function(target) {
    return target['close__V']();
  };
  invoker.getQualifiedName__Ljavax_lang_model_element_Name_2 = function(target) {
    return target['getQualifiedName__Ljavax_lang_model_element_Name_2']();
  };
  invoker.getModifiers__Ljava_util_Set_2 = function(target) {
    return target['getModifiers__Ljava_util_Set_2']();
  };
  invoker.contains__ZLjava_lang_Object_2 = function(target, p1) {
    return target['contains__ZLjava_lang_Object_2'](p1);
  };
  invoker.getEnclosingElement__Ljavax_lang_model_element_Element_2 = function(target) {
    return target['getEnclosingElement__Ljavax_lang_model_element_Element_2']();
  };
  invoker.length__I = function(target) {
    return target['length__I']();
  };
  invoker.insert__Ljava_lang_StringBuilder_2IC = function(target, p1, p2) {
    return target['insert__Ljava_lang_StringBuilder_2IC'](p1,p2);
  };
  invoker.insert__Ljava_lang_StringBuilder_2ILjava_lang_CharSequence_2 = function(target, p1, p2) {
    return target['insert__Ljava_lang_StringBuilder_2ILjava_lang_CharSequence_2'](p1,p2);
  };
  invoker.getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2 = function(target, p1) {
    return target['getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2'](p1);
  };
  invoker.getMessager__Ljavax_annotation_processing_Messager_2 = function(target) {
    return target['getMessager__Ljavax_annotation_processing_Messager_2']();
  };
  invoker.printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2Ljavax_lang_model_element_Element_2 = function(target, p1, p2, p3) {
    return target['printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2Ljavax_lang_model_element_Element_2'](p1,p2,p3);
  };
  invoker.asType__Ljavax_lang_model_type_TypeMirror_2 = function(target) {
    return target['asType__Ljavax_lang_model_type_TypeMirror_2']();
  };
  invoker.erasure__Ljavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2 = function(target, p1) {
    return target['erasure__Ljavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2'](p1);
  };
  invoker.getEnclosedElements__Ljava_util_List_2 = function(target) {
    return target['getEnclosedElements__Ljava_util_List_2']();
  };
  invoker.isAssignable__ZLjavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2 = function(target, p1, p2) {
    return target['isAssignable__ZLjavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2'](p1,p2);
  };
  invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1) {
    return target['get__Ljava_lang_Object_2Ljava_lang_Object_2'](p1);
  };
  invoker.getReturnType__Ljavax_lang_model_type_TypeMirror_2 = function(target) {
    return target['getReturnType__Ljavax_lang_model_type_TypeMirror_2']();
  };
  invoker.getKind__Ljavax_lang_model_type_TypeKind_2 = function(target) {
    return target['getKind__Ljavax_lang_model_type_TypeKind_2']();
  };
  invoker.getParameters__Ljava_util_List_2 = function(target) {
    return target['getParameters__Ljava_util_List_2']();
  };
  invoker.asSubclass__Ljava_lang_Class_2Ljava_lang_Class_2 = function(target, p1) {
    return target['asSubclass__Ljava_lang_Class_2Ljava_lang_Class_2'](p1);
  };
  invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(target, p1, p2) {
    return target['createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](p1,p2);
  };
  invoker.registerFunction__VLjava_lang_String_2I = function(target, p1, p2) {
    return target['registerFunction__VLjava_lang_String_2I'](p1,p2);
  };
  invoker.registerProperty__VLjava_lang_String_2IZZ = function(target, p1, p2, p3, p4) {
    return target['registerProperty__VLjava_lang_String_2IZZ'](p1,p2,p3,p4);
  };
  invoker.setValue__VLjava_lang_Object_2 = function(target, p1) {
    return target['setValue__VLjava_lang_Object_2'](p1);
  };
  invoker.handle__VLjavafx_event_Event_2 = function(target, p1) {
    return target['handle__VLjavafx_event_Event_2'](p1);
  };
  invoker.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2 = function(target, p1, p2) {
    return target['toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2'](p1,p2);
  };
  invoker.toNumber__Ljava_lang_Number_2Ljava_lang_Object_2Ljava_lang_String_2 = function(target, p1, p2) {
    return target['toNumber__Ljava_lang_Number_2Ljava_lang_Object_2Ljava_lang_String_2'](p1,p2);
  };
  invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.values__Ljava_util_Collection_2 = function(target) {
    return target['values__Ljava_util_Collection_2']();
  };
  invoker.addListener__VLjavafx_beans_value_ChangeListener_2 = function(target, p1) {
    return target['addListener__VLjavafx_beans_value_ChangeListener_2'](p1);
  };
  invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1, p2, p3) {
    return target['valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2'](p1,p2,p3);
  };
  exports['registerResource']('META-INF/MANIFEST.MF', 'TWFuaWZlc3QtVmVyc2lvbjogMS4wDQpCbmQtTGFzdE1vZGlmaWVkOiAxNTk2NTI0OTYzNDkxDQpCdWlsZC1KZGs6IDEuOC4wXzIyMQ0KQnVpbHQtQnk6IGh1ZHNvbg0KQnVuZGxlLURlc2NyaXB0aW9uOiBKYXZhRlggQmVhbkluZm8gRXh0ZW5zaW9uIEFQSS4NCkJ1bmRsZS1MaWNlbnNlOiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVA0KQnVuZGxlLU1hbmlmZXN0VmVyc2lvbjogMg0KQnVuZGxlLU5hbWU6IEphdmFGWCBCZWFuSW5mbyBBUEkNCkJ1bmRsZS1TeW1ib2xpY05hbWU6IGNvbS5kdWtlc2NyaXB0LmphdmFmeC5iZWFuaW5mbw0KQnVuZGxlLVZlcnNpb246IDAuNi4wDQpDcmVhdGVkLUJ5OiBBcGFjaGUgTWF2ZW4gQnVuZGxlIFBsdWdpbg0KRXhwb3J0LVBhY2thZ2U6IGNvbS5kdWtlc2NyaXB0LmFwaS5qYXZhZnguYmVhbnM7dXNlczo9ImphdmFmeC5iZWFucy5wcm9wDQogZXJ0eSxqYXZhZnguYmVhbnMudmFsdWUsamF2YWZ4LmV2ZW50Ijt2ZXJzaW9uPSIwLjYuMCIsY29tLmR1a2VzY3JpcHQuc3ANCiBpLmphdmFmeC5iZWFuczt1c2VzOj0iY29tLmR1a2VzY3JpcHQuYXBpLmphdmFmeC5iZWFucyI7dmVyc2lvbj0iMC42LjAiDQpJbXBvcnQtUGFja2FnZTogY29tLmR1a2VzY3JpcHQuc3BpLmphdmFmeC5iZWFucyxqYXZhZnguYmVhbnM7dmVyc2lvbj0iWzgNCiAuNjAsOSkiLGphdmFmeC5iZWFucy5wcm9wZXJ0eTt2ZXJzaW9uPSJbOC42MCw5KSIsamF2YWZ4LmJlYW5zLnZhbHVlO3Zlcg0KIHNpb249Ils4LjYwLDkpIixqYXZhZnguZXZlbnQ7dmVyc2lvbj0iWzguNjAsOSkiLGphdmF4LmFubm90YXRpb24ucHJvY2VzDQogc2luZyxqYXZheC5sYW5nLm1vZGVsLGphdmF4LmxhbmcubW9kZWwuZWxlbWVudCxqYXZheC5sYW5nLm1vZGVsLnR5cGUsamENCiB2YXgubGFuZy5tb2RlbC51dGlsLGphdmF4LnRvb2xzLG5ldC5qYXZhLmh0bWw7dmVyc2lvbj0iWzEuNywyKSIsbmV0Lmphdg0KIGEuaHRtbC5qc29uO3ZlcnNpb249IlsxLjcsMikiLG9yZy5uZXRiZWFucy5odG1sLmpzb24uc3BpO3ZlcnNpb249IlsxLjcsDQogMikiDQpUb29sOiBCbmQtMi4xLjAuMjAxMzA0MjYtMTIyMjEzDQo=');
  exports['registerResource']('META-INF/services/com.dukescript.spi.javafx.beans.FXBeanInfoProvider', 'Y29tLmR1a2VzY3JpcHQuaW1wbC5qYXZhZnguYmVhbnMuRlhIdG1sNEphdmFQcm92aWRlcgo=');
  exports['registerResource']('META-INF/services/javax.annotation.processing.Processor', 'Y29tLmR1a2VzY3JpcHQuaW1wbC5qYXZhZnguYmVhbnMuRlhCZWFuSW5mb1Byb2Nlc3Nvcgo=');
});