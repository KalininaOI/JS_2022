"кот" > "код"; // true  сравнивается посимвольно, в кодировке Т больше  Д
"2" + 2 * "2"; // 24 первая двойка остается строкой, а третья пребразуется в число из-за оператора умножения
undefined == null; // true это нестрогое равенство
undefined != null; // true это нестрогое равенство
null == 0; // false null ничем не преобразуется к 0
2 > "3"; // false знак сравнения преобразует строку 3 в число
null - false + true; //1
1 / "l"; // NaN
"2" * "3"; //6  
4 + 5 + "O"; //90 
"l" + 4 + 5; //l45 
"4" - 2; //2 
"4" - "4x"; // NaN 
"23" == 23; //true
null == false;  // true null и false ничем не преобразуется к 0 
" -4 "/ 0 + 1; // -infinity 
null + 1; // 1
undefined + null; // NaN
1 === "1"; // false
"2" > 10; // false
NaN == undefined; // false
