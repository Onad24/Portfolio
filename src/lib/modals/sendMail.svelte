    <script>
    export let open = false;
    export let onClose = () => {};


	let to = '';
	let subject = 'Job Related';
	let text = '';
	let message = '';
    async function sendEmail() {
    const res = await fetch('/api/sendMail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ to, subject, text })
    });

    const result = await res.json();

    if (result.success) {
      message = '✅ Email sent!';
      to = subject = text = '';
    } else {
      message = '❌ Failed to send: ' + (result.error?.message || 'Unknown error');
    }
  }
    </script>
  
  {#if open}
    <div class="modal-overlay">
      <div class="modal-content">
        <button class="close-button" on:click={onClose}>✖</button>
        
		<form class="email-form" on:submit|preventDefault={sendEmail}>
            <input type="email" bind:value={to} placeholder="Your email" required />
            <textarea bind:value={text} placeholder="Message" required></textarea>
            <button type="submit">Send Email</button>
            <p class="message">{message}</p>
        </form>
      </div>
    </div>
  {/if}
  
  <style>
		.email-form input,
		.email-form textarea {
		  width: 100%;
		  margin-bottom: 0.75rem;
		  border: 1px solid #ccc;
		  border-radius: 4px;
		  font-size: 1rem;
		}

        .email-form textarea {
          height: 120px;
        }

		.email-form button {
			margin-top: 20px;
		padding: 10px 20px;
		font-size: 1rem;
		background-color: #1e90ff;
		color: white;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		transition: background-color 0.3s;
		}
	  
		.email-form button:hover {
            background-color: #1c75d8;
		}
	  
		.message {
		  margin-top: 0.5rem;
		  font-size: 0.9rem;
		}

    .modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
  
    .modal-content {
      background: rgba(0, 0, 0, 0.3);
      padding: 1.5rem;
      padding-top: 3rem;
      border-radius: 8px;
      width: 100%;
      max-width: 600px;
      position: relative;
      box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    }
  
    .close-button {
      position: absolute;
      top: 8px;
      right: 10px;
      background: transparent;
      border: none;
      font-size: 1.2rem;
      cursor: pointer;
      color: #888;
    }
  
    .close-button:hover {
      color: #333;
    }
  </style>
  