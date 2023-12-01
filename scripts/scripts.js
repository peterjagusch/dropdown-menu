$(document).ready( function () {

$('#dropdown-menu').append([
  { id: 1, title: 'Summer Party - 7th July 2023' },
  { id: 2, title: 'Christmas Party - 18th Dec 2023' },
  { id: 3, title: 'Early Spring - 3rd February 2024' },
  { id: 4, title: 'March Party - 15th March 2024' },
  { id: 5, title: 'Summer Party - 8th July 2024' },
  { id: 6, title: 'October Fest - 4th October 2024' },
].map(Item).join(''));


/*
Set up dropdowns and 
get all checkboxes from inside the dropdowns
*/	
const chBoxes = document.querySelectorAll('.dropdown-menu input[type="checkbox"]'); 
const dpBtn = document.getElementById('multiSelectDropdown'); 
let selectedListItems = []; 

/*
Handle callback function
Iterate and add text to button
*/  
function handleCB() {
	selectedListItems = []; 
	let selectedListItemsText = ''; 

	chBoxes.forEach((checkbox) => { 
		if (checkbox.checked) { 
			selectedListItems.push(checkbox.value); 
			selectedListItemsText += $(checkbox).data("id") + ', '; 
		}
	}); 

	dpBtn.innerText = 
		selectedListItems.length > 0 
			? selectedListItems.length > 2 ? selectedListItems.length +' events selected' : selectedListItemsText.slice(0, -2) : 'Please select events...'; 
} 
	
	chBoxes.forEach((checkbox) => { 
		checkbox.addEventListener('change', handleCB); 
	}); 
	
});
/* 
	Filter function
*/	

function filterFunction() {
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("dropdown-menu");
    li = ul.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {
      txtValue = li[i].textContent || li[i].innerText;      
      let filters = filter.split(" ") 
      filters = filters.filter(f => f.length)   

      let shouldDisplay = true
      filters.forEach(filt => {
        shouldDisplay = shouldDisplay && txtValue.toUpperCase().includes(filt)
      })
      li[i].style.display = (shouldDisplay || filters.length === 0) ? "" : "none";
		if(i === 0){
			li[i].style.display = ""
		} 
    }
  }

  $("#searchInput").on('keyup change', function (){
	let len = $("#searchInput").val().length;
	(len >=2) ? $('#dropdown-menu').addClass("reset"): $('#dropdown-menu').removeClass("reset")	
  });
  
  $("#clearSearch").click(function(){
	$("#searchInput").val('').trigger( "change" );
	filterFunction()

  });
  

  
const Item = ({ title, id }) => `
  <li class="dropdown-item"> 
  <span class="checkboxTick">
	<label class="checkboxTick">
	${title}
	<input class="checkboxTick" type="checkbox" data-id="${title}" value="${id}"> 
		<span class="checkboxTick-target"></span>
	</label> 
	</span>
</li> 
`;


