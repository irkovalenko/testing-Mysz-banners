/*
* This code is copyright.
* Copyright 2016, 2017 Hype-Expert.uk and other contributors
* Released under the MIT license.
*
* MIT License
* 
* Copyright (c) 2017 Darren Hill
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
* http://www.hype-expert.uk/licence
*	
*/

function extendHypeAPI(hypeDocument, element, event) {

	/**
	* hypeDocument.currentSceneElement 1.0
	* @return {HTMLDivElement} gives you the current scene element
	*/
	hypeDocument.currentSceneElement = function(){
    var hC = document.getElementById(hypeDocument.documentId());
    var sA = hC.getElementsByClassName("HYPE_scene");
    for (i = 0; i < sA.length; i++) {
    		if (sA[i].style.display === "block") return sA[i];
		}
	}
	
	/**
	* 20/05/2017
	* Name: hypeDocument.setMixBlendMode 1.0
	* Copyright: ©2017 @DBear
	* @setter: Sets the parent of any elements mix blend mode
	* requires: hypeDocument.currentSceneElement
	*/
	hypeDocument.setMixBlendMode = function(selector, mode, isolation){
		var sC = this.currentSceneElement();
		var blenders = sC.querySelectorAll(selector);
		
		for(var i=0; i < blenders.length; i++){
			blenders[i].parentElement.style.mixBlendMode = mode;
			blenders[i].parentElement.style.isolation = isolation;
		}
	}
	
	/**
	* 21/05/2017
	* Name: hypeDocument.setBackgroundBlendMode 1.0
	* Copyright: ©2017 @DBear
	* @setter: Sets the background blend mode of any element
	* requires: hypeDocument.currentSceneElement
	*/
	hypeDocument.setBackgroundMixBlendMode = function(selector, mode, bgColor){
		var sC = this.currentSceneElement();
		var blenders = sC.querySelectorAll(selector);
		
		for(var i=0; i < blenders.length; i++){
			blenders[i].style.backgroundBlendMode = mode;
			blenders[i].style.backgroundColor = bgColor;
		}
	}
	
	return true;
}

if("HYPE_eventListeners" in window === false) {
	window.HYPE_eventListeners = Array();
}

window.HYPE_eventListeners.push({"type":"HypeDocumentLoad", "callback":extendHypeAPI});