function piramide(elem, n) {
	var st = "";
	for (var i = 1; i <= n; i++) {
		for (var j = 1; j <= i; j++) {
			st += "*";
		}
		st += "<br>";
	}
	elem.innerHTML = st;
}

var min = function(a, b) {
	return a < b ? a : b;
}

var isEven = function(x) {
	if(x < 0) return isEven(-x);
	if(x <= 1) return x == 0;
	return isEven(x - 2);
}

// Cuenta cuántos caracteres c hay en string st
var countChar = function(st, c) {
  var ans = 0;
  for(var i = 0; i < st.length; i++) {
    if(st.charAt(i) == c)
      ans++;
  }
  return ans;
}

// Cuenta cuántas Bs hay en st
var countBs = function(st) {
  return countChar(st, 'B');
}

var range = function(ini, fin, step = 1) {
	var arr = [];
	while(ini != fin) {
		arr.push(ini);
		ini += step;
	}
	arr.push(fin);
	return arr;
}

var sum = function(arr) {
	var ans = 0;
	for(var i = 0; i < arr.length; i++)
		ans += arr[i];
	return ans;
}

// Regresa arreglo invertido
var reverseArray = function(arr) {
  var ans = [];
  for(var i = arr.length - 1; i >= 0; i--) {
    ans.push(i);
  }
  return ans;
}

// Invierte el arreglo mandado
function reverseArrayInPlace(arr) {
	var i = 0, j = arr.length - 1;
  while(i < j) {
  	var aux = arr[i];
    arr[i] = arr[j];
    arr[j] = arr[i];
    i++; j--;
  }
}

var arrayToList = function(arr) {
	var list = null;
  for(var i = arr.length - 1; i >= 0; i--) {
  	list = { 
      value: arr[i],
      rest: list
    }
  }
  return list;
}

var listToArray = function(list) {
	var arr = [];
  	for(var node = list; node; node = node.rest) 
      arr.push(node.value);
  return arr;
}

var prepend = function(element, list) {
	var newlist = {
    	value: element,
      	rest: list
    }
    return newlist;
}

var nth = function(list, n) {
	var node = list;
  	for(var i = 0; i < n; i++) {
    	if(node.rest != null) node = node.rest;
    }
  	return node.value;
}

// Comparación de todos los elementos de un objeto
var deepEqual = function(obj1, obj2) {
	if(obj1 == null) return obj2 == null;
  	if(typeof obj1 != "object") return obj1 == obj2;
  	var flag = true;
  	for(var key in obj1) 
    	if(deepEqual(obj1[key], obj2[key]) == false) 
        	flag = false;
  return flag;
}

// Merge dos arreglos
var merge = function(arr1, arr2) {
	arr = [];
  	for(var i = 0; i < arr1.length; i++)
      arr.push(arr1[i]);
  	for(var i = 0; i < arr2.length; i++)
      arr.push(arr2[i]);
  	return arr;
}

// Junta arreglos de arreglos en un solo arreglo
var flatten = function(arr, f = merge) {
	ans = [];
  	for(var i = 0; i < arr.length; i++) {
    	ans = merge(ans, arr[i]);
    }
  return ans;
}