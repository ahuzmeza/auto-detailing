<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FD Detailing</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#about">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#services">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#work">Our Work</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="tel:your-phone-placeholder" style="color: var(--primary-color);">Call us: your-phone-placeholder</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <section class="hero">
        <div class="container">
            <h1>Welcome to FD Detailing</h1>
        </div>
    </section>
    <main>
        <div class="container">
            <section class="qr-section">
                <button class="btn btn-primary" id="qrButton">QR Code</button>
                <div id="qrDropdown" style="display:none;">
                    <!-- Add your QR code image here -->
                    <img src="your-qr-code-placeholder.png" alt="QR Code">
                </div>
            </section>
            <section class="presentation" id="about">
                <h2>About Us</h2>
                <p>
                    Short presentation about FD Detailing...
                </p>
            </section>
            <section class="services" id="services">
                <h2>Our Services</h2>
                <div class="service">
                    <h3>Full Detailing Service</h3>
                    <ul>
                        <li>Exterior wash and wax</li>
                        <li>Interior deep cleaning</li>
                        <li>Wheel and tire cleaning</li>
                        <li>Engine bay cleaning</li>
                    </ul>
                    <p class="price">$149.99</p>
                </div>
            </section>
            <section class="carousel-section" id="work">
                <h2>Our Work</h2>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="image1.jpg" class="d-block w-100" alt="Image 1">
                        </div>
                        <div class="carousel-item">
                        <img src="image2.jpg" class="d-block w-100" alt="Image 2">
                    </div>
                    <div class="carousel-item">
                        <img src="image3.jpg" class="d-block w-100" alt="Image 3">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </section>
    </div>
</main>

<footer class="bg-light py-4">
    <div class="container">
        <p class="text-center mb-0">© 2023 FD Detailing. All rights reserved.</p>
    </div>
</footer>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<script src="script.js"></script>
