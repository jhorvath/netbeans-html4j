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

function micronaut_react_$MyValidatorFactory$TriangleValidator0DefinitionClass() {
  var m;
  var CLS = micronaut_react_$MyValidatorFactory$TriangleValidator0DefinitionClass;
  if (!CLS.$class) {
    var pp = vm.io_micronaut_context_AbstractBeanDefinitionReference(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_$ANNOTATION_METADATA'] = null;
  m = c._$ANNOTATION_METADATA = function (v) {  if (arguments.length == 1) CLS['fld_$ANNOTATION_METADATA'] = v; return CLS['fld_$ANNOTATION_METADATA']; };
c['_$ANNOTATION_METADATA'] = m;

    m = c.class__V = function() {
var stA0 = new vm.io_micronaut_inject_annotation_DefaultAnnotationMetadata;
var stA1 = stA0;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA2, 0, "javax.inject.Singleton");
Array.at(stA2, 1, (refs_java_util_Collections || (refs_java_util_Collections = vm.java_util_Collections(false)))['_EMPTY_MAP']());
var stA2 = (refs_io_micronaut_core_annotation_AnnotationUtil || (refs_io_micronaut_core_annotation_AnnotationUtil = vm.io_micronaut_core_annotation_AnnotationUtil(false)))['internMapOf__Ljava_util_Map_2_3Ljava_lang_Object_2'](stA2);
var stA3 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA3, 0, "javax.inject.Scope");
Array.at(stA3, 1, (refs_java_util_Collections || (refs_java_util_Collections = vm.java_util_Collections(false)))['_EMPTY_MAP']());
var stA3 = (refs_io_micronaut_core_annotation_AnnotationUtil || (refs_io_micronaut_core_annotation_AnnotationUtil = vm.io_micronaut_core_annotation_AnnotationUtil(false)))['internMapOf__Ljava_util_Map_2_3Ljava_lang_Object_2'](stA3);
var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 4);
Array.at(stA4, 0, "javax.inject.Singleton");
Array.at(stA4, 1, (refs_java_util_Collections || (refs_java_util_Collections = vm.java_util_Collections(false)))['_EMPTY_MAP']());
Array.at(stA4, 2, "javax.inject.Scope");
Array.at(stA4, 3, (refs_java_util_Collections || (refs_java_util_Collections = vm.java_util_Collections(false)))['_EMPTY_MAP']());
var stA4 = (refs_io_micronaut_core_annotation_AnnotationUtil || (refs_io_micronaut_core_annotation_AnnotationUtil = vm.io_micronaut_core_annotation_AnnotationUtil(false)))['internMapOf__Ljava_util_Map_2_3Ljava_lang_Object_2'](stA4);
var stA5 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, (12));
Array.at(stA5, 0, "java.lang.FunctionalInterface");
Array.at(stA5, 1, (refs_java_util_Collections || (refs_java_util_Collections = vm.java_util_Collections(false)))['_EMPTY_MAP']());
Array.at(stA5, 2, "javax.annotation.concurrent.ThreadSafe");
Array.at(stA5, 3, (refs_java_util_Collections || (refs_java_util_Collections = vm.java_util_Collections(false)))['_EMPTY_MAP']());
Array.at(stA5, 4, "javax.inject.Singleton");
Array.at(stA5, 5, (refs_java_util_Collections || (refs_java_util_Collections = vm.java_util_Collections(false)))['_EMPTY_MAP']());
Array.at(stA5, (6), "io.micronaut.context.annotation.Factory");
Array.at(stA5, (7), (refs_java_util_Collections || (refs_java_util_Collections = vm.java_util_Collections(false)))['_EMPTY_MAP']());
Array.at(stA5, (8), "javax.annotation.concurrent.Immutable");
Array.at(stA5, (9), (refs_java_util_Collections || (refs_java_util_Collections = vm.java_util_Collections(false)))['_EMPTY_MAP']());
Array.at(stA5, (10), "io.micronaut.core.annotation.Indexes");
var stA6 = stA5;var stI7 = (11);var stA8 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA8, 0, "value");
var stA9 = stA8;var stI10 = 1;var stA11 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lio/micronaut/core/annotation/AnnotationValue;', vm.io_micronaut_core_annotation_AnnotationValue, 1);
var stA12 = stA11;var stI13 = 0;var stA14 = new vm.io_micronaut_core_annotation_AnnotationValue;
var stA15 = stA14;var stA16 = "io.micronaut.core.annotation.Indexed";var stA17 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA17, 0, "value");
var stA18 = stA17;var stI19 = 1;var stA20 = c.$micronaut_1load_1class_1value_10__Lio_micronaut_core_annotation_AnnotationClassValue_2();
Array.at(stA18, stI19, stA20);
var stA17 = (refs_io_micronaut_core_annotation_AnnotationUtil || (refs_io_micronaut_core_annotation_AnnotationUtil = vm.io_micronaut_core_annotation_AnnotationUtil(false)))['internMapOf__Ljava_util_Map_2_3Ljava_lang_Object_2'](stA17);
(refs_io_micronaut_core_annotation_AnnotationValue || (refs_io_micronaut_core_annotation_AnnotationValue = vm.io_micronaut_core_annotation_AnnotationValue(false))).constructor['cons__VLjava_lang_String_2Ljava_util_Map_2'].call(stA15, stA16, stA17);
Array.at(stA12, stI13, stA14);
Array.at(stA9, stI10, stA11);
var stA8 = (refs_io_micronaut_core_annotation_AnnotationUtil || (refs_io_micronaut_core_annotation_AnnotationUtil = vm.io_micronaut_core_annotation_AnnotationUtil(false)))['internMapOf__Ljava_util_Map_2_3Ljava_lang_Object_2'](stA8);
Array.at(stA6, stI7, stA8);
var stA5 = (refs_io_micronaut_core_annotation_AnnotationUtil || (refs_io_micronaut_core_annotation_AnnotationUtil = vm.io_micronaut_core_annotation_AnnotationUtil(false)))['internMapOf__Ljava_util_Map_2_3Ljava_lang_Object_2'](stA5);
var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 4);
Array.at(stA6, 0, "javax.inject.Singleton");
var stA7 = stA6;var stI8 = 1;var stA9 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 1);
Array.at(stA9, 0, "io.micronaut.context.annotation.Factory");
var stA9 = (refs_io_micronaut_core_annotation_AnnotationUtil || (refs_io_micronaut_core_annotation_AnnotationUtil = vm.io_micronaut_core_annotation_AnnotationUtil(false)))['internListOf__Ljava_util_List_2_3Ljava_lang_Object_2'](stA9);
Array.at(stA7, stI8, stA9);
Array.at(stA6, 2, "javax.inject.Scope");
var stA7 = stA6;var stI8 = 3;var stA9 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA9, 0, "javax.inject.Singleton");
Array.at(stA9, 1, "io.micronaut.context.annotation.Factory");
var stA9 = (refs_io_micronaut_core_annotation_AnnotationUtil || (refs_io_micronaut_core_annotation_AnnotationUtil = vm.io_micronaut_core_annotation_AnnotationUtil(false)))['internListOf__Ljava_util_List_2_3Ljava_lang_Object_2'](stA9);
Array.at(stA7, stI8, stA9);
var stA6 = (refs_io_micronaut_core_annotation_AnnotationUtil || (refs_io_micronaut_core_annotation_AnnotationUtil = vm.io_micronaut_core_annotation_AnnotationUtil(false)))['internMapOf__Ljava_util_Map_2_3Ljava_lang_Object_2'](stA6);
(refs_io_micronaut_inject_annotation_DefaultAnnotationMetadata || (refs_io_micronaut_inject_annotation_DefaultAnnotationMetadata = vm.io_micronaut_inject_annotation_DefaultAnnotationMetadata(false))).constructor['cons__VLjava_util_Map_2Ljava_util_Map_2Ljava_util_Map_2Ljava_util_Map_2Ljava_util_Map_2'].call(stA1, stA2, stA3, stA4, stA5, stA6);
c._$ANNOTATION_METADATA(stA0);
var stA0 = c.$micronaut_1load_1class_1value_11__Lio_micronaut_core_annotation_AnnotationClassValue_2();
(refs_io_micronaut_inject_annotation_DefaultAnnotationMetadata || (refs_io_micronaut_inject_annotation_DefaultAnnotationMetadata = vm.io_micronaut_inject_annotation_DefaultAnnotationMetadata(false)))['registerAnnotationType__VLio_micronaut_core_annotation_AnnotationClassValue_2'](stA0);
var stA0 = c.$micronaut_1load_1class_1value_12__Lio_micronaut_core_annotation_AnnotationClassValue_2();
(refs_io_micronaut_inject_annotation_DefaultAnnotationMetadata || (refs_io_micronaut_inject_annotation_DefaultAnnotationMetadata = vm.io_micronaut_inject_annotation_DefaultAnnotationMetadata(false)))['registerAnnotationType__VLio_micronaut_core_annotation_AnnotationClassValue_2'](stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.$micronaut_1load_1class_1value_10__Lio_micronaut_core_annotation_AnnotationClassValue_2 = function() {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
try {var stA0 = new vm.io_micronaut_core_annotation_AnnotationClassValue;
(refs_io_micronaut_core_annotation_AnnotationClassValue || (refs_io_micronaut_core_annotation_AnnotationClassValue = vm.io_micronaut_core_annotation_AnnotationClassValue(false))).constructor['cons__VLjava_lang_Class_2'].call(stA0, (refs_io_micronaut_validation_validator_constraints_ConstraintValidator || (refs_io_micronaut_validation_validator_constraints_ConstraintValidator = vm.io_micronaut_validation_validator_constraints_ConstraintValidator(false))).constructor.$class);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Throwable']) {var stA0 = e;{ gt = 10; break IF; }}
throw e;
}return stA0;
    }
    X_10: for (;;) { IF: if (gt <= 10) {
var lcA0 = stA0;
var stA0 = new vm.io_micronaut_core_annotation_AnnotationClassValue;
(refs_io_micronaut_core_annotation_AnnotationClassValue || (refs_io_micronaut_core_annotation_AnnotationClassValue = vm.io_micronaut_core_annotation_AnnotationClassValue(false))).constructor['cons__VLjava_lang_String_2'].call(stA0, "io.micronaut.validation.validator.constraints.ConstraintValidator");
return stA0;

    }
}}
};
    m.access = 4104;
    m.cls = CLS;
    m = c.$micronaut_1load_1class_1value_11__Lio_micronaut_core_annotation_AnnotationClassValue_2 = function() {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
try {var stA0 = new vm.io_micronaut_core_annotation_AnnotationClassValue;
(refs_io_micronaut_core_annotation_AnnotationClassValue || (refs_io_micronaut_core_annotation_AnnotationClassValue = vm.io_micronaut_core_annotation_AnnotationClassValue(false))).constructor['cons__VLjava_lang_Class_2'].call(stA0, (refs_java_lang_FunctionalInterface || (refs_java_lang_FunctionalInterface = vm.java_lang_FunctionalInterface(false))).constructor.$class);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Throwable']) {var stA0 = e;{ gt = 10; break IF; }}
throw e;
}return stA0;
    }
    X_10: for (;;) { IF: if (gt <= 10) {
var lcA0 = stA0;
var stA0 = new vm.io_micronaut_core_annotation_AnnotationClassValue;
(refs_io_micronaut_core_annotation_AnnotationClassValue || (refs_io_micronaut_core_annotation_AnnotationClassValue = vm.io_micronaut_core_annotation_AnnotationClassValue(false))).constructor['cons__VLjava_lang_String_2'].call(stA0, "java.lang.FunctionalInterface");
return stA0;

    }
}}
};
    m.access = 4104;
    m.cls = CLS;
    m = c.$micronaut_1load_1class_1value_12__Lio_micronaut_core_annotation_AnnotationClassValue_2 = function() {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
try {var stA0 = new vm.io_micronaut_core_annotation_AnnotationClassValue;
(refs_io_micronaut_core_annotation_AnnotationClassValue || (refs_io_micronaut_core_annotation_AnnotationClassValue = vm.io_micronaut_core_annotation_AnnotationClassValue(false))).constructor['cons__VLjava_lang_Class_2'].call(stA0, (refs_io_micronaut_core_annotation_Indexed || (refs_io_micronaut_core_annotation_Indexed = vm.io_micronaut_core_annotation_Indexed(false))).constructor.$class);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Throwable']) {var stA0 = e;{ gt = 10; break IF; }}
throw e;
}return stA0;
    }
    X_10: for (;;) { IF: if (gt <= 10) {
var lcA0 = stA0;
var stA0 = new vm.io_micronaut_core_annotation_AnnotationClassValue;
(refs_io_micronaut_core_annotation_AnnotationClassValue || (refs_io_micronaut_core_annotation_AnnotationClassValue = vm.io_micronaut_core_annotation_AnnotationClassValue(false))).constructor['cons__VLjava_lang_String_2'].call(stA0, "io.micronaut.core.annotation.Indexed");
return stA0;

    }
}}
};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_io_micronaut_context_AbstractBeanDefinitionReference || (refs_io_micronaut_context_AbstractBeanDefinitionReference = vm.io_micronaut_context_AbstractBeanDefinitionReference(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2'].call(lcA0, "io.micronaut.validation.validator.constraints.ConstraintValidator", "micronaut.react.$MyValidatorFactory$TriangleValidator0Definition");
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.load__Lio_micronaut_inject_BeanDefinition_2 = function() {
  var  lcA0 = this;
var stA0 = new micronaut_react_$MyValidatorFactory$TriangleValidator0Definition;
(refs_micronaut_react_$MyValidatorFactory$TriangleValidator0Definition || (refs_micronaut_react_$MyValidatorFactory$TriangleValidator0Definition = micronaut_react_$MyValidatorFactory$TriangleValidator0Definition(false))).constructor.cons__V.call(stA0);
return stA0;

};
c['load__Lio_micronaut_inject_BeanDefinition_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getBeanDefinitionType__Ljava_lang_Class_2 = function() {
  var  lcA0 = this;
return (refs_micronaut_react_$MyValidatorFactory$TriangleValidator0Definition || (refs_micronaut_react_$MyValidatorFactory$TriangleValidator0Definition = micronaut_react_$MyValidatorFactory$TriangleValidator0Definition(false))).constructor.$class;

};
c['getBeanDefinitionType__Ljava_lang_Class_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getBeanType__Ljava_lang_Class_2 = function() {
  var  lcA0 = this;
return (refs_io_micronaut_validation_validator_constraints_ConstraintValidator || (refs_io_micronaut_validation_validator_constraints_ConstraintValidator = vm.io_micronaut_validation_validator_constraints_ConstraintValidator(false))).constructor.$class;

};
c['getBeanType__Ljava_lang_Class_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getAnnotationMetadata__Lio_micronaut_core_annotation_AnnotationMetadata_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;return c._$ANNOTATION_METADATA();

};
c['getAnnotationMetadata__Lio_micronaut_core_annotation_AnnotationMetadata_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isSingleton__Z = function() {
  var  lcA0 = this;
var stA0 = lcA0;return 1;

};
c['isSingleton__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isConfigurationProperties__Z = function() {
  var  lcA0 = this;
var stA0 = lcA0;return 0;

};
c['isConfigurationProperties__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function micronaut_react_$MyValidatorFactory$TriangleValidator0DefinitionClassfillInstOf(x) {
        Object.defineProperty(x, '$instOf_micronaut_react_$MyValidatorFactory$TriangleValidator0DefinitionClass', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: micronaut_react_$MyValidatorFactory$TriangleValidator0DefinitionClassfillInstOf });
    micronaut_react_$MyValidatorFactory$TriangleValidator0DefinitionClassfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'micronaut/react/$MyValidatorFactory$TriangleValidator0DefinitionClass';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 4113;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_java_util_Collections;
    var refs_io_micronaut_core_annotation_AnnotationUtil;
    var refs_io_micronaut_core_annotation_AnnotationValue;
    var refs_io_micronaut_inject_annotation_DefaultAnnotationMetadata;
    var refs_io_micronaut_validation_validator_constraints_ConstraintValidator;
    var refs_io_micronaut_core_annotation_AnnotationClassValue;
    var refs_java_lang_FunctionalInterface;
    var refs_io_micronaut_core_annotation_Indexed;
    var refs_io_micronaut_context_AbstractBeanDefinitionReference;
    var refs_micronaut_react_$MyValidatorFactory$TriangleValidator0Definition;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.micronaut_react_$MyValidatorFactory$TriangleValidator0DefinitionClass = registerClass(exports,'micronaut_react_$MyValidatorFactory$TriangleValidator0DefinitionClass',micronaut_react_$MyValidatorFactory$TriangleValidator0DefinitionClass);


function micronaut_react_$MyValidatorFactory$TriangleValidator0Definition() {
  var m;
  var CLS = micronaut_react_$MyValidatorFactory$TriangleValidator0Definition;
  if (!CLS.$class) {
    var pp = vm.io_micronaut_context_AbstractBeanDefinition(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.build__Ljava_lang_Object_2Lio_micronaut_context_BeanResolutionContext_2Lio_micronaut_context_BeanContext_2Lio_micronaut_inject_BeanDefinition_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
if (lcA2 !== null && !lcA2['$instOf_io_micronaut_context_DefaultBeanContext']) vm.java_lang_Class(false).castEx(lcA2, 'io.micronaut.context.DefaultBeanContext');
var stA0 = invoker.getBean__Ljava_lang_Object_2Lio_micronaut_context_BeanResolutionContext_2Ljava_lang_Class_2(lcA2,lcA1, (refs_micronaut_react_MyValidatorFactory || (refs_micronaut_react_MyValidatorFactory = micronaut_react_MyValidatorFactory(false))).constructor.$class);
var lcA4 = stA0;
if (lcA4 !== null && !lcA4['$instOf_micronaut_react_MyValidatorFactory']) vm.java_lang_Class(false).castEx(lcA4, 'micronaut.react.MyValidatorFactory');
var stA0 = lcA4.triangleValidator__Lio_micronaut_validation_validator_constraints_ConstraintValidator_2();
var lcA5 = stA0;
var stA0 = invoker.injectBean__Ljava_lang_Object_2Lio_micronaut_context_BeanResolutionContext_2Lio_micronaut_context_BeanContext_2Ljava_lang_Object_2(lcA0,lcA1, lcA2, lcA5);
if (stA0 !== null && !stA0['$instOf_io_micronaut_validation_validator_constraints_ConstraintValidator']) vm.java_lang_Class(false).castEx(stA0, 'io.micronaut.validation.validator.constraints.ConstraintValidator');
var lcA5 = stA0;
return lcA5;

};
c['build__Ljava_lang_Object_2Lio_micronaut_context_BeanResolutionContext_2Lio_micronaut_context_BeanContext_2Lio_micronaut_inject_BeanDefinition_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLjava_lang_Class_2Ljava_lang_Class_2Ljava_lang_String_2Lio_micronaut_core_annotation_AnnotationMetadata_2Z_3Lio_micronaut_core_type_Argument_2 = function(lcA1, lcA2, lcA3, lcA4, lcI5, lcA6) {
  var  lcA0 = this;
(refs_io_micronaut_context_AbstractBeanDefinition || (refs_io_micronaut_context_AbstractBeanDefinition = vm.io_micronaut_context_AbstractBeanDefinition(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2Ljava_lang_String_2Lio_micronaut_core_annotation_AnnotationMetadata_2Z_3Lio_micronaut_core_type_Argument_2'].call(lcA0, lcA1, lcA2, lcA3, lcA4, lcI5, lcA6);
return;

};
CLS['cons__VLjava_lang_Class_2Ljava_lang_Class_2Ljava_lang_String_2Lio_micronaut_core_annotation_AnnotationMetadata_2Z_3Lio_micronaut_core_type_Argument_2'] = m;

    m.access = 4;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_io_micronaut_validation_validator_constraints_ConstraintValidator || (refs_io_micronaut_validation_validator_constraints_ConstraintValidator = vm.io_micronaut_validation_validator_constraints_ConstraintValidator(false))).constructor.$class;var stA2 = (refs_micronaut_react_MyValidatorFactory || (refs_micronaut_react_MyValidatorFactory = micronaut_react_MyValidatorFactory(false))).constructor.$class;var stA3 = "triangleValidator";var stA4 = new vm.io_micronaut_inject_annotation_DefaultAnnotationMetadata;
var stA5 = stA4;var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA6, 0, "javax.inject.Singleton");
Array.at(stA6, 1, (refs_java_util_Collections || (refs_java_util_Collections = vm.java_util_Collections(false)))['_EMPTY_MAP']());
var stA6 = (refs_io_micronaut_core_annotation_AnnotationUtil || (refs_io_micronaut_core_annotation_AnnotationUtil = vm.io_micronaut_core_annotation_AnnotationUtil(false)))['internMapOf__Ljava_util_Map_2_3Ljava_lang_Object_2'](stA6);
var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA7, 0, "javax.inject.Scope");
Array.at(stA7, 1, (refs_java_util_Collections || (refs_java_util_Collections = vm.java_util_Collections(false)))['_EMPTY_MAP']());
var stA7 = (refs_io_micronaut_core_annotation_AnnotationUtil || (refs_io_micronaut_core_annotation_AnnotationUtil = vm.io_micronaut_core_annotation_AnnotationUtil(false)))['internMapOf__Ljava_util_Map_2_3Ljava_lang_Object_2'](stA7);
var stA8 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA8, 0, "javax.inject.Scope");
Array.at(stA8, 1, (refs_java_util_Collections || (refs_java_util_Collections = vm.java_util_Collections(false)))['_EMPTY_MAP']());
var stA8 = (refs_io_micronaut_core_annotation_AnnotationUtil || (refs_io_micronaut_core_annotation_AnnotationUtil = vm.io_micronaut_core_annotation_AnnotationUtil(false)))['internMapOf__Ljava_util_Map_2_3Ljava_lang_Object_2'](stA8);
var stA9 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, (10));
Array.at(stA9, 0, "java.lang.FunctionalInterface");
Array.at(stA9, 1, (refs_java_util_Collections || (refs_java_util_Collections = vm.java_util_Collections(false)))['_EMPTY_MAP']());
Array.at(stA9, 2, "javax.annotation.concurrent.ThreadSafe");
Array.at(stA9, 3, (refs_java_util_Collections || (refs_java_util_Collections = vm.java_util_Collections(false)))['_EMPTY_MAP']());
Array.at(stA9, 4, "javax.inject.Singleton");
Array.at(stA9, 5, (refs_java_util_Collections || (refs_java_util_Collections = vm.java_util_Collections(false)))['_EMPTY_MAP']());
Array.at(stA9, (6), "javax.annotation.concurrent.Immutable");
Array.at(stA9, (7), (refs_java_util_Collections || (refs_java_util_Collections = vm.java_util_Collections(false)))['_EMPTY_MAP']());
Array.at(stA9, (8), "io.micronaut.core.annotation.Indexes");
var stA10 = stA9;var stI11 = (9);var stA12 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA12, 0, "value");
var stA13 = stA12;var stI14 = 1;var stA15 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lio/micronaut/core/annotation/AnnotationValue;', vm.io_micronaut_core_annotation_AnnotationValue, 1);
var stA16 = stA15;var stI17 = 0;var stA18 = new vm.io_micronaut_core_annotation_AnnotationValue;
var stA19 = stA18;var stA20 = "io.micronaut.core.annotation.Indexed";var stA21 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA21, 0, "value");
var stA22 = stA21;var stI23 = 1;var stA24 = c.$micronaut_1load_1class_1value_10__Lio_micronaut_core_annotation_AnnotationClassValue_2();
Array.at(stA22, stI23, stA24);
var stA21 = (refs_io_micronaut_core_annotation_AnnotationUtil || (refs_io_micronaut_core_annotation_AnnotationUtil = vm.io_micronaut_core_annotation_AnnotationUtil(false)))['internMapOf__Ljava_util_Map_2_3Ljava_lang_Object_2'](stA21);
(refs_io_micronaut_core_annotation_AnnotationValue || (refs_io_micronaut_core_annotation_AnnotationValue = vm.io_micronaut_core_annotation_AnnotationValue(false))).constructor['cons__VLjava_lang_String_2Ljava_util_Map_2'].call(stA19, stA20, stA21);
Array.at(stA16, stI17, stA18);
Array.at(stA13, stI14, stA15);
var stA12 = (refs_io_micronaut_core_annotation_AnnotationUtil || (refs_io_micronaut_core_annotation_AnnotationUtil = vm.io_micronaut_core_annotation_AnnotationUtil(false)))['internMapOf__Ljava_util_Map_2_3Ljava_lang_Object_2'](stA12);
Array.at(stA10, stI11, stA12);
var stA9 = (refs_io_micronaut_core_annotation_AnnotationUtil || (refs_io_micronaut_core_annotation_AnnotationUtil = vm.io_micronaut_core_annotation_AnnotationUtil(false)))['internMapOf__Ljava_util_Map_2_3Ljava_lang_Object_2'](stA9);
var stA10 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA10, 0, "javax.inject.Scope");
var stA11 = stA10;var stI12 = 1;var stA13 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 1);
Array.at(stA13, 0, "javax.inject.Singleton");
var stA13 = (refs_io_micronaut_core_annotation_AnnotationUtil || (refs_io_micronaut_core_annotation_AnnotationUtil = vm.io_micronaut_core_annotation_AnnotationUtil(false)))['internListOf__Ljava_util_List_2_3Ljava_lang_Object_2'](stA13);
Array.at(stA11, stI12, stA13);
var stA10 = (refs_io_micronaut_core_annotation_AnnotationUtil || (refs_io_micronaut_core_annotation_AnnotationUtil = vm.io_micronaut_core_annotation_AnnotationUtil(false)))['internMapOf__Ljava_util_Map_2_3Ljava_lang_Object_2'](stA10);
(refs_io_micronaut_inject_annotation_DefaultAnnotationMetadata || (refs_io_micronaut_inject_annotation_DefaultAnnotationMetadata = vm.io_micronaut_inject_annotation_DefaultAnnotationMetadata(false))).constructor['cons__VLjava_util_Map_2Ljava_util_Map_2Ljava_util_Map_2Ljava_util_Map_2Ljava_util_Map_2'].call(stA5, stA6, stA7, stA8, stA9, stA10);
c.constructor.cons__VLjava_lang_Class_2Ljava_lang_Class_2Ljava_lang_String_2Lio_micronaut_core_annotation_AnnotationMetadata_2Z_3Lio_micronaut_core_type_Argument_2.call(stA0, stA1, stA2, stA3, stA4, 0, null);
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.$micronaut_1load_1class_1value_10__Lio_micronaut_core_annotation_AnnotationClassValue_2 = function() {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
try {var stA0 = new vm.io_micronaut_core_annotation_AnnotationClassValue;
(refs_io_micronaut_core_annotation_AnnotationClassValue || (refs_io_micronaut_core_annotation_AnnotationClassValue = vm.io_micronaut_core_annotation_AnnotationClassValue(false))).constructor['cons__VLjava_lang_Class_2'].call(stA0, (refs_io_micronaut_validation_validator_constraints_ConstraintValidator || (refs_io_micronaut_validation_validator_constraints_ConstraintValidator = vm.io_micronaut_validation_validator_constraints_ConstraintValidator(false))).constructor.$class);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Throwable']) {var stA0 = e;{ gt = 10; break IF; }}
throw e;
}return stA0;
    }
    X_10: for (;;) { IF: if (gt <= 10) {
var lcA0 = stA0;
var stA0 = new vm.io_micronaut_core_annotation_AnnotationClassValue;
(refs_io_micronaut_core_annotation_AnnotationClassValue || (refs_io_micronaut_core_annotation_AnnotationClassValue = vm.io_micronaut_core_annotation_AnnotationClassValue(false))).constructor['cons__VLjava_lang_String_2'].call(stA0, "io.micronaut.validation.validator.constraints.ConstraintValidator");
return stA0;

    }
}}
};
    m.access = 4104;
    m.cls = CLS;
    m = c.injectBean__Ljava_lang_Object_2Lio_micronaut_context_BeanResolutionContext_2Lio_micronaut_context_BeanContext_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
if (lcA3 !== null && !lcA3['$instOf_io_micronaut_validation_validator_constraints_ConstraintValidator']) vm.java_lang_Class(false).castEx(lcA3, 'io.micronaut.validation.validator.constraints.ConstraintValidator');
var lcA4 = lcA3;
var lcA5 = null;
if (lcA2 !== null && !lcA2['$instOf_io_micronaut_context_DefaultBeanContext']) vm.java_lang_Class(false).castEx(lcA2, 'io.micronaut.context.DefaultBeanContext');
var stA0 = (refs_io_micronaut_context_AbstractBeanDefinition || (refs_io_micronaut_context_AbstractBeanDefinition = vm.io_micronaut_context_AbstractBeanDefinition(false)))['injectBean__Ljava_lang_Object_2Lio_micronaut_context_BeanResolutionContext_2Lio_micronaut_context_BeanContext_2Ljava_lang_Object_2'].call(lcA0, lcA1, lcA2, lcA3);
return stA0;

};
c['injectBean__Ljava_lang_Object_2Lio_micronaut_context_BeanResolutionContext_2Lio_micronaut_context_BeanContext_2Ljava_lang_Object_2'] = m;

    m.access = 4;
    m.cls = CLS;
    m = c.resolveAnnotationMetadata__Lio_micronaut_core_annotation_AnnotationMetadata_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;return (refs_micronaut_react_$MyValidatorFactory$TriangleValidator0DefinitionClass || (refs_micronaut_react_$MyValidatorFactory$TriangleValidator0DefinitionClass = micronaut_react_$MyValidatorFactory$TriangleValidator0DefinitionClass(false)))._$ANNOTATION_METADATA();

};
c['resolveAnnotationMetadata__Lio_micronaut_core_annotation_AnnotationMetadata_2'] = m;

    m.access = 4;
    m.cls = CLS;
    m = c.isSingleton__Z = function() {
  var  lcA0 = this;
var stA0 = lcA0;return 1;

};
c['isSingleton__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isIterable__Z = function() {
  var  lcA0 = this;
var stA0 = lcA0;return 0;

};
c['isIterable__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isPrimary__Z = function() {
  var  lcA0 = this;
var stA0 = lcA0;return 0;

};
c['isPrimary__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isProvided__Z = function() {
  var  lcA0 = this;
var stA0 = lcA0;return 0;

};
c['isProvided__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getScope__Ljava_util_Optional_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_java_util_Optional || (refs_java_util_Optional = vm.java_util_Optional(false)))['of__Ljava_util_Optional_2Ljava_lang_Object_2']((refs_javax_inject_Singleton || (refs_javax_inject_Singleton = vm.javax_inject_Singleton(false))).constructor.$class);
return stA1;

};
c['getScope__Ljava_util_Optional_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getTypeArgumentsMap__Ljava_util_Map_2 = function() {
  var  lcA0 = this;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 4);
Array.at(stA0, 0, "io.micronaut.validation.validator.constraints.ConstraintValidator");
var stA1 = stA0;var stI2 = 1;var stA3 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lio/micronaut/core/type/Argument;', vm.io_micronaut_core_type_Argument, 2);
var stA4 = stA3;var stI5 = 0;var stA6 = (refs_io_micronaut_core_type_Argument || (refs_io_micronaut_core_type_Argument = vm.io_micronaut_core_type_Argument(false)))['of__Lio_micronaut_core_type_Argument_2Ljava_lang_Class_2Ljava_lang_String_2']((refs_micronaut_react_ValidTriangle || (refs_micronaut_react_ValidTriangle = micronaut_react_ValidTriangle(false))).constructor.$class, "A");
Array.at(stA4, stI5, stA6);
var stA4 = stA3;var stI5 = 1;var stA6 = (refs_io_micronaut_core_type_Argument || (refs_io_micronaut_core_type_Argument = vm.io_micronaut_core_type_Argument(false)))['of__Lio_micronaut_core_type_Argument_2Ljava_lang_Class_2Ljava_lang_String_2']((refs_micronaut_react_Triangle || (refs_micronaut_react_Triangle = micronaut_react_Triangle(false))).constructor.$class, "T");
Array.at(stA4, stI5, stA6);
Array.at(stA1, stI2, stA3);
Array.at(stA0, 2, "javax.validation.ConstraintValidator");
var stA1 = stA0;var stI2 = 3;var stA3 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lio/micronaut/core/type/Argument;', vm.io_micronaut_core_type_Argument, 2);
var stA4 = stA3;var stI5 = 0;var stA6 = (refs_io_micronaut_core_type_Argument || (refs_io_micronaut_core_type_Argument = vm.io_micronaut_core_type_Argument(false)))['of__Lio_micronaut_core_type_Argument_2Ljava_lang_Class_2Ljava_lang_String_2']((refs_micronaut_react_ValidTriangle || (refs_micronaut_react_ValidTriangle = micronaut_react_ValidTriangle(false))).constructor.$class, "A");
Array.at(stA4, stI5, stA6);
var stA4 = stA3;var stI5 = 1;var stA6 = (refs_io_micronaut_core_type_Argument || (refs_io_micronaut_core_type_Argument = vm.io_micronaut_core_type_Argument(false)))['of__Lio_micronaut_core_type_Argument_2Ljava_lang_Class_2Ljava_lang_String_2']((refs_micronaut_react_Triangle || (refs_micronaut_react_Triangle = micronaut_react_Triangle(false))).constructor.$class, "T");
Array.at(stA4, stI5, stA6);
Array.at(stA1, stI2, stA3);
var stA0 = (refs_io_micronaut_core_util_CollectionUtils || (refs_io_micronaut_core_util_CollectionUtils = vm.io_micronaut_core_util_CollectionUtils(false)))['mapOf__Ljava_util_Map_2_3Ljava_lang_Object_2'](stA0);
return stA0;

};
c['getTypeArgumentsMap__Ljava_util_Map_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function micronaut_react_$MyValidatorFactory$TriangleValidator0DefinitionfillInstOf(x) {
        Object.defineProperty(x, '$instOf_micronaut_react_$MyValidatorFactory$TriangleValidator0Definition', { value : true });
      vm.io_micronaut_inject_BeanFactory(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: micronaut_react_$MyValidatorFactory$TriangleValidator0DefinitionfillInstOf });
    micronaut_react_$MyValidatorFactory$TriangleValidator0DefinitionfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'micronaut/react/$MyValidatorFactory$TriangleValidator0Definition';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_micronaut_inject_BeanFactory(false).constructor.$class
    ]; };
    CLS.$class.access = 4096;
    CLS.$class.cnstr = CLS;
    var refs_micronaut_react_MyValidatorFactory;
    var refs_io_micronaut_context_AbstractBeanDefinition;
    var refs_io_micronaut_validation_validator_constraints_ConstraintValidator;
    var refs_java_util_Collections;
    var refs_io_micronaut_core_annotation_AnnotationUtil;
    var refs_io_micronaut_core_annotation_AnnotationValue;
    var refs_io_micronaut_inject_annotation_DefaultAnnotationMetadata;
    var refs_io_micronaut_core_annotation_AnnotationClassValue;
    var refs_micronaut_react_$MyValidatorFactory$TriangleValidator0DefinitionClass;
    var refs_javax_inject_Singleton;
    var refs_java_util_Optional;
    var refs_micronaut_react_ValidTriangle;
    var refs_io_micronaut_core_type_Argument;
    var refs_micronaut_react_Triangle;
    var refs_io_micronaut_core_util_CollectionUtils;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.micronaut_react_$MyValidatorFactory$TriangleValidator0Definition = micronaut_react_$MyValidatorFactory$TriangleValidator0Definition;

vm.io_micronaut_inject_BeanFactory = link('io/micronaut/inject/BeanFactory', function(f) { vm.io_micronaut_inject_BeanFactory =  f; });
vm.io_micronaut_core_util_CollectionUtils = link('io/micronaut/core/util/CollectionUtils', function(f) { vm.io_micronaut_core_util_CollectionUtils =  f; });

function micronaut_react_Triangle() {
  var m;
  var CLS = micronaut_react_Triangle;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._a = function (v) {  if (arguments.length == 1) this['fld_micronaut_react_Triangle_a'] = v; return this['fld_micronaut_react_Triangle_a']; };
  m = c._b = function (v) {  if (arguments.length == 1) this['fld_micronaut_react_Triangle_b'] = v; return this['fld_micronaut_react_Triangle_b']; };
  m = c._c = function (v) {  if (arguments.length == 1) this['fld_micronaut_react_Triangle_c'] = v; return this['fld_micronaut_react_Triangle_c']; };
    m = CLS.cons__VLjava_lang_Integer_2Ljava_lang_Integer_2Ljava_lang_Integer_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
lcA0['fld_micronaut_react_Triangle_a'] = lcA1;
lcA0['fld_micronaut_react_Triangle_b'] = lcA2;
lcA0['fld_micronaut_react_Triangle_c'] = lcA3;
return;

};
CLS['cons__VLjava_lang_Integer_2Ljava_lang_Integer_2Ljava_lang_Integer_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getA__Ljava_lang_Integer_2 = function() {
  var  lcA0 = this;
return lcA0['fld_micronaut_react_Triangle_a'];

};
c['getA__Ljava_lang_Integer_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getB__Ljava_lang_Integer_2 = function() {
  var  lcA0 = this;
return lcA0['fld_micronaut_react_Triangle_b'];

};
c['getB__Ljava_lang_Integer_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getC__Ljava_lang_Integer_2 = function() {
  var  lcA0 = this;
return lcA0['fld_micronaut_react_Triangle_c'];

};
c['getC__Ljava_lang_Integer_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.toString__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
var stA0 = new vm.java_util_StringJoiner;
var stA1 = stA0;var stA2 = ", ";var stA3 = invoker.getSimpleName__Ljava_lang_String_2(c.constructor.$class);
