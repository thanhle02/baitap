
var slides = document.querySelectorAll('.anh img'),
	index = 0;
setInterval(function () {
	var hientai = slides[index];
	if (index == slides.length - 1) {
		index = 0;
	} else {
		index++;
	}
	var tieptheo = slides[index];
	for (var i = 0; i < slides.length; i++) {
		slides[i].classList.remove('active')
	}
	tieptheo.classList.add('active')
}, 1500)

var icon = document.querySelector(".icon");
function hien() {
	icon.style.display = " block";
}
function an() {
	icon.style.display = "none";
}

var icon2 = document.querySelector(".cute");
function can() {
	icon2.style.display = " block";
}
function khong() {
	icon2.style.display = "none";
}

var huhu = document.querySelector(".huhu");
function thanh() {
	huhu.style.display = " block";
}
function thich() {
	huhu.style.display = "none";
}

var haha = document.querySelector(".haha");
function hd() {
	haha.style.display = " block";
}
function hay() {
	haha.style.display = "none";
}
const btn = document.querySelectorAll("button")
btn.forEach(function (button, index) {
	button.addEventListener("click", function (event) {
		{
			var btnItem = event.target
			var product = btnItem.parentElement
			var productImg = product.querySelector("img").src
			var productName = product.querySelector("H1").innerText
			var productPrice = product.querySelector("span").innerText
			console.log(productPrice)
			addcart(productPrice, productName, productImg)
		}
	})
})

function addcart(productPrice, productName, productImg) {

	var addtr = document.createElement("tr")
	var cartItem = document.querySelectorAll("tbody tr")
	for (var i = 0; i < cartItem.length; i++) {
		var productT = document.querySelectorAll(".title")
		if (productT[i].innerHTML == productName) {
			alert(" sản phẩm của bạn đã có trong giỏ hàng")
			return
		}
	}
	var trcontent = ' <tr> <td style="display:flex; text-align:center"><img style="width:70px" src="' + productImg + '"  alt=""> <span class="title">' + productName + '</span> ' + productName + ' </td><td>    <p><span class=" price" >' + productPrice + '</span> <sup>đ</sup></p> </td>   <td><input style=" width:30px; outline: none;" type="number" value="1" min="1"></td>    <td> <span class="cart-delete">  xóa</span> </td> </tr>'
	addtr.innerHTML = trcontent
	var cartTable = document.querySelector("tbody")
	cartTable.append(addtr)

	carttotal();

}


//    tổng
function carttotal() {
	var cartItem = document.querySelectorAll("tbody tr")
	var totalC = 0

	for (var i = 0; i < cartItem.length; i++) {
		var inputValue = cartItem[i].querySelector("input").value

		var productPrice = cartItem[i].querySelector(".price").innerHTML

		totalA = inputValue * productPrice * 1000

		totalC = totalC + totalA
		totalD = totalC.toLocaleString('de-DE')

	}
	var cartTotalA = document.querySelector(".price-total span")
	cartTotalA.innerHTML = totalD



}
// xóa
function deletecart() {
	var cartItem = document.querySelectorAll("tbody tr")

	for (var i = 0; i < cartItem.length; i++) {
		var productT = document.querySelectorAll(".cart-delete")
		console.log(productT)
		productT[i].addEventListener("click", function (event) {
			var cartDelete = event.target
			var cartitemR = cartDelete.parentElement.parentElement
			cartitemR.remove()

		})
	}
}



