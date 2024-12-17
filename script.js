const container = document.getElementById('container');
        const registerBtn = document.getElementById('register');
        const loginBtn = document.getElementById('login');

        registerBtn.addEventListener('click', () => {
            container.classList.add("active");
        });

        loginBtn.addEventListener('click', () => {
            container.classList.remove("active");
        });

        document.getElementById('signInForm').addEventListener('submit', function(e) {
            e.preventDefault();

            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            console.log('Login attempt:', email, password); // For debugging

            if (email === 'admin@gmail.com' && password === 'admin') {
                window.location.href = 'dashboard.html';
            } else if (email === 'user@gmail.com' && password === 'user') {
                window.location.href = 'user.html';
            } else {
                alert('Invalid username or password. Please try again.');
            }
        });