$(document).ready(function() {
	// Load cards from localStorage or create sample cards
	var cards = JSON.parse(localStorage.getItem('cards')) || [
	  { title: 'Google', img: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' },
	  { title: 'YouTube', img: 'https://www.youtube.com/s/desktop/0b3a2b5f/img/favicon.ico' }
	];
  
	// Render cards on page load
	renderCards(cards);
  
	// Add Card button click handler
	$('#add-card-btn').click(function() {
	  var title = $('#card-title-input').val();
	  var img = $('#card-img-input').val();
  
	  // Create new card object and add to cards array
	  var newCard = { title: title, img: img };
	  cards.push(newCard);
  
	  // Save updated cards array to localStorage
	  localStorage.setItem('cards', JSON.stringify(cards));
  
	  // Render updated cards on page
	  renderCards(cards);
  
	  // Close modal and clear form inputs
	  $('#add-card-modal').modal('hide');
	  $('#card-title-input').val('');
	  $('#card-img-input').val('');
	});
  
	// Edit Card button click handler
	$('#edit-card-modal').on('show.bs.modal', function(event) {
	  var button = $(event.relatedTarget); // Button that triggered the modal
	  var title = button.data('card-title'); // Extract info from data-* attributes
	  var img = button.data('card-img');
  
	  // Populate form inputs with current card data
	  $('#card-title-input').val(title);
	  $('#card-img-input').val(img);
  
	  // Save updated card data on Save Changes button click
	  $('#save-card-btn').click(function() {
		var index = button.closest('.card').index(); // Index of current card in cards array
		cards[index].title = $('#card-title-input').val();
		cards[index].img = $('#card-img-input').val();
  
		// Save updated cards array to localStorage
		localStorage.setItem('cards', JSON.stringify(cards));
  
		// Render updated cards on page
		renderCards(cards);
  
		// Close modal and clear form inputs
		$('#edit-card-modal').modal('hide');
		$('#card-title-input').val('');
		$('#card-img-input').val('');
	  });
	});
  
	// Delete Card button click handler
	$('.delete-card').click(function() {
	  var index = $(this).closest('.card').index(); // Index of current card in cards array
	  cards.splice(index, 1); // Remove card from cards array
  
	  // Save updated cards array to localStorage
	  localStorage.setItem('cards', JSON.stringify(cards));
  
	  // Render updated cards on page
	  renderCards(cards);
	});
  
	// Add Card click handler
	$('.add-card').click(function() {
	  $('#add-card-modal').modal('show');
	});
  });
  
  function renderCards(cards) {
	var cardContainer = $('#card-container');
	cardContainer.empty(); // Clear existing cards from container
  
	// Loop through cards array and create new card element for each
	cards.forEach(function(card) {
	  var cardHtml = `
		<div class="col-md-3 mb-3">
		  <div class="card">
			<img src="${card.img}" class="card-img-top" alt="${card.title}">
			<div class="card-body">
			  <h5 class="card-title">${card.title}</h5>
			  <button class="btn btn-primary edit-card" data-toggle="modal" data-target="#edit-card-modal" data-card-title="${card.title}" data-card-img="${card.img}">Edit</button>
			  <button class="btn btn-danger delete-card">Delete</button>
			</div>
		  </div>
		</div>
	  `;
	  cardContainer.append(cardHtml);
	});
  
	// Add Add Card element at the end
	var addCardHtml = `
	  <div class="col-md-3 mb-3">
		<div class="card add-card">
		  <i class="fas fa-plus"></i>
		  <p>Add New Site</p>
		</div>
	  </div>
	`;
	cardContainer.append(addCardHtml);
  }