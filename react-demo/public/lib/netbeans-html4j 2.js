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

function cz_xelfi_demo_react4jdemo_TicTacToe2$Square() {
  var m;
  var CLS = cz_xelfi_demo_react4jdemo_TicTacToe2$Square;
  if (!CLS.$class) {
    var pp = vm.net_java_html_react_React$Component(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._className = function (v) {  if (arguments.length == 1) this['fld_cz_xelfi_demo_react4jdemo_TicTacToe2$Square_className'] = v; return this['fld_cz_xelfi_demo_react4jdemo_TicTacToe2$Square_className']; };
    m = CLS.cons__VLnet_java_html_react_React$Props_2 = function(lcA1) {
  var  lcA0 = this;
