// var passportZagranKg = document.querySelector('').onclick = () => {f1()}
// var svidOroj = document.querySelector('').onclick = () => {f2()}
// var snils = document.querySelector('').onclick = () => {f3()}
// var migrCard = document.querySelector('').onclick = () => {f4()}

var view = document.querySelector('.view-box');

function f1() {
	var data = `<ul class="data">
		<button class="cls" onclick="closeViewBox()">Close</button>
					<li>Паспорт № <b>AC4198726</b></li>
					<li>Фамилия <b>TUNGUCHBEK UULU</b></li>
					<li>Имя <b>BEKZAT</b></li>
					<li>Пол <b>M</b></li>
					<li>Гражданство <b>KYRGYZ REPUBLIC</b></li>
					<li>Дата рождения <b>20 04 2002</b></li>
					<li>Место рождения <b>KYRGYZ REPUBLIC</b></li>
					<li>Дата выдачи <b>19 03 2020</b></li>
					<li>Орган, выдавший документ <b>SRS</b></li>
					<li>Дата окончания срока действия <b>19 03 2030</b></li>

					<li>Персональный номер <b>22004200250549</b></li>
				</ul>`;
	view.innerHTML = data
	viewBox()
}
function f2() {
	var data = `<ul class="data">
		<button class="cls" onclick="closeViewBox()">Close</button>
					<li>Паспорт № <b>AC4198726</b></li>
					<li>Фамилия <b>TUNGUCHBEK UULU</b></li>
					<li>Имя <b>BEKZAT</b></li>
					<li>Пол <b>M</b></li>
					<li>Гражданство <b>KYRGYZ REPUBLIC</b></li>
					<li>Дата рождения <b>20 04 2002</b></li>
					<li>Место рождения <b>KYRGYZ REPUBLIC</b></li>
					<li>Дата выдачи <b>19 03 2020</b></li>
					<li>Орган, выдавший документ <b>SRS</b></li>
					<li>Дата окончания срока действия <b>19 03 2030</b></li>

					<li>Персональный номер <b>22004200250549</b></li>
				</ul>`;
	view.innerHTML = data
	viewBox()
}
function f3() {
	var data = `<ul class="data">
		<button class="cls" onclick="closeViewBox()">Close</button>
					<li>№ <b>20521963332</b></li>
					<li>Ф. И. О. <b>ТУНГУЧБЕК УУЛУ БЕКЗАТ</b></li>
					<li>Дата и место рождения <b>20 апреля 2002</b></li>
					<li><b>КАРА-КОЧКОР КАРА-КУЛЖИНСКИЙ ОШСКАЯ ОБЛАСТЬ КЫРГЫЗСКАЯ РЕСПУБЛИКА</b></li>
					<li>Пол <b>МУЖСКОЙ</b></li>
					<li>Дата регистрации <b>27 марта 2019</b></li>
				</ul>`;
	view.innerHTML = data
	viewBox()
}
function f4() {
	var data = `<ul class="data">
		<button class="cls" onclick="closeViewBox()">Close</button>
					<li>Серия <b>6514</b></li>
					<li>№ <b>0581396</b></li>
					<li>Фамилия <b>Тунгучбек</b></li>
					<li>Имя <b>Бекзат</b></li>
					<li>Дата рождения <b>20 04 2002</b></li>
					<li>Пол <b>Mуж.</b></li>
					<li>Гражданство <b>Кыргызстан</b></li>
					<li>Документ, удостоверяющий личность <b>2743798</b></li>
					<li>Номер визы <b></b></li>
					<li>Цель визита <b>Частный</b></li>
					<li>Срок пребывания: с <b>19 03 2020</b> до <b></b></li>
					<li>Подпись <b></b></li>
				</ul>`;
	view.innerHTML = data
	viewBox()
}

function viewBox() {
	view.style.transform = 'scale(1)';
}

function closeViewBox() {
	view.style.transform = 'scale(0)';
}