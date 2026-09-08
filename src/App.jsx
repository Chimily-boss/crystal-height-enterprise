import { useState } from "react";
import {
  FaBolt,
  FaSolarPanel,
  FaVideo,
  FaBars,
  FaTimes,
  FaArrowRight,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaPaperPlane,
} from "react-icons/fa";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setFormStatus("");

    const form = event.target;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    );

    formData.append(
      "subject",
      "New Enquiry - Crystal Height Enterprise"
    );

    formData.append(
      "from_name",
      "Crystal Height Enterprise Website"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setFormStatus(
          "Thank you! Your enquiry has been sent successfully. We will get back to you shortly."
        );

        form.reset();
      } else {
        setFormStatus(
          "Something went wrong while sending your enquiry. Please try again."
        );
      }
    } catch {
      setFormStatus(
        "Unable to send your enquiry right now. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="app">

      {/* =========================================
          NAVIGATION
          ========================================= */}
      <header className="navbar">
        <div className="container nav-container">

          <a
            href="#home"
            className="logo"
            onClick={closeMenu}
            aria-label="Crystal Height Enterprise Home"
          >
            <div className="logo-icon">
              <FaBolt />
            </div>

            <div className="logo-text">
              <span>CRYSTAL HEIGHT</span>
              <small>ENTERPRISE</small>
            </div>
          </a>

          <nav
            className={
              menuOpen
                ? "nav-links active"
                : "nav-links"
            }
            aria-label="Main navigation"
          >
            <a href="#home" onClick={closeMenu}>
              Home
            </a>

            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <a href="#services" onClick={closeMenu}>
              Services
            </a>

            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="nav-button"
          >
            Get a Quote
            <FaArrowRight />
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </header>


      <main>

        {/* =========================================
            HERO
            ========================================= */}
        <section className="hero" id="home">
          <div className="hero-overlay"></div>

          <div className="container hero-container">
            <div className="hero-content">

              <div className="hero-badge">
                <FaBolt />
                <span>POWERING YOUR FUTURE</span>
              </div>

              <h1>
                Reliable Power.
                <br />
                <span>Smarter Energy.</span>
                <br />
                Safer Spaces.
              </h1>

              <p>
                Professional electrical, solar, inverter and
                CCTV solutions designed to keep your home and
                business powered, protected, and connected.
              </p>

              <div className="hero-buttons">

                <a
                  href="#contact"
                  className="primary-button"
                >
                  Request a Quote
                  <FaArrowRight />
                </a>

                <a
                  href="#services"
                  className="secondary-button"
                >
                  Explore Services
                </a>

              </div>

              <div className="hero-trust">

                <div className="trust-item">
                  <FaBolt />
                  <span>Electrical Solutions</span>
                </div>

                <div className="trust-item">
                  <FaSolarPanel />
                  <span>Solar & Inverter</span>
                </div>

                <div className="trust-item">
                  <FaVideo />
                  <span>CCTV Security</span>
                </div>

              </div>

            </div>
          </div>
        </section>


        {/* =========================================
            SERVICES
            ========================================= */}
        <section
          className="services-section"
          id="services"
        >
          <div className="container">

            <div className="section-heading">

              <div className="section-label">
                <span></span>
                WHAT WE DO
              </div>

              <h2>
                Complete{" "}
                <span>Power & Security</span>{" "}
                Solutions
              </h2>

              <p>
                From electrical installations to renewable
                energy and security systems, we provide
                dependable solutions for homes, offices,
                shops, and other commercial spaces.
              </p>

            </div>


            <div className="services-grid">

              {/* SERVICE 01 */}
              <article className="service-card">

                <div className="service-image">
                  <img
                    src="/images/electrical_installation.jpg"
                    alt="Electrical installation by Crystal Height Enterprise"
                    loading="lazy"
                  />
                </div>

                <div className="service-card-content">

                  <div className="service-top">
                    <div className="service-icon">
                      <FaBolt />
                    </div>

                    <span className="service-number">
                      01
                    </span>
                  </div>

                  <h3>
                    Electrical Installation
                  </h3>

                  <p>
                    Professional electrical wiring and
                    installation for residential and
                    commercial buildings, with safety and
                    reliability at the forefront.
                  </p>

                  <a
                    href="#contact"
                    className="service-link"
                  >
                    Request Service
                    <FaArrowRight />
                  </a>

                </div>
              </article>


              {/* SERVICE 02 */}
              <article className="service-card">

                <div className="service-image">
                  <img
                    src="/images/solar_installation.jpg"
                    alt="Solar panel installation by Crystal Height Enterprise"
                    loading="lazy"
                  />
                </div>

                <div className="service-card-content">

                  <div className="service-top">
                    <div className="service-icon solar-icon">
                      <FaSolarPanel />
                    </div>

                    <span className="service-number">
                      02
                    </span>
                  </div>

                  <h3>
                    Solar Installation
                  </h3>

                  <p>
                    Harness reliable solar energy with
                    professionally designed and installed
                    solar power systems tailored to your
                    energy needs.
                  </p>

                  <a
                    href="#contact"
                    className="service-link"
                  >
                    Request Service
                    <FaArrowRight />
                  </a>

                </div>
              </article>


              {/* SERVICE 03 */}
              <article className="service-card">

                <div className="service-image">
                  <img
                    src="/images/inverter_installation.jpg"
                    alt="Inverter and battery installation by Crystal Height Enterprise"
                    loading="lazy"
                  />
                </div>

                <div className="service-card-content">

                  <div className="service-top">
                    <div className="service-icon">
                      <FaBolt />
                    </div>

                    <span className="service-number">
                      03
                    </span>
                  </div>

                  <h3>
                    Inverter Installation
                  </h3>

                  <p>
                    Keep your home or business powered with
                    properly configured inverter and backup
                    power systems designed for dependable
                    performance.
                  </p>

                  <a
                    href="#contact"
                    className="service-link"
                  >
                    Request Service
                    <FaArrowRight />
                  </a>

                </div>
              </article>


              {/* SERVICE 04 */}
              <article className="service-card">

                <div className="service-image">
                  <img
                    src="/images/electrical_repairs.jpg"
                    alt="Electrical repair service by Crystal Height Enterprise"
                    loading="lazy"
                  />
                </div>

                <div className="service-card-content">

                  <div className="service-top">
                    <div className="service-icon">
                      <FaBolt />
                    </div>

                    <span className="service-number">
                      04
                    </span>
                  </div>

                  <h3>
                    Electrical Repairs
                  </h3>

                  <p>
                    Fast and professional diagnosis,
                    maintenance, and repair of electrical
                    faults, wiring problems, switches,
                    sockets, and other electrical systems.
                  </p>

                  <a
                    href="#contact"
                    className="service-link"
                  >
                    Request Service
                    <FaArrowRight />
                  </a>

                </div>
              </article>


              {/* SERVICE 05 */}
              <article className="service-card">

                <div className="service-image">
                  <img
                    src="/images/cctv_installation.jpg"
                    alt="CCTV security camera installation by Crystal Height Enterprise"
                    loading="lazy"
                  />
                </div>

                <div className="service-card-content">

                  <div className="service-top">
                    <div className="service-icon cctv-icon">
                      <FaVideo />
                    </div>

                    <span className="service-number">
                      05
                    </span>
                  </div>

                  <h3>
                    CCTV Sales & Installation
                  </h3>

                  <p>
                    Protect your property with quality CCTV
                    solutions, professional installation,
                    camera positioning, and system setup.
                  </p>

                  <a
                    href="#contact"
                    className="service-link"
                  >
                    Request Service
                    <FaArrowRight />
                  </a>

                </div>
              </article>

            </div>
          </div>
        </section>


        {/* =========================================
            ABOUT
            ========================================= */}
        <section
          className="about-section"
          id="about"
        >
          <div className="container">

            <div className="about-grid">

              <div className="about-visual">

                <div className="about-image-wrapper">
                  <img
                    src="/images/About.jpg"
                    alt="Crystal Height Enterprise electrical and energy solutions"
                    loading="lazy"
                  />

                  <div className="about-image-overlay"></div>

                  <div className="about-badge">
                    <strong>POWER</strong>
                    <span>YOU CAN TRUST</span>
                  </div>
                </div>

              </div>


              <div className="about-content">

                <div className="section-label">
                  <span></span>
                  ABOUT US
                </div>

                <h2>
                  Powering Homes.
                  <br />
                  <span>Supporting Businesses.</span>
                </h2>

                <p>
                  At CRYSTAL HEIGHT ENTERPRISE, we provide
                  dependable electrical, renewable energy,
                  power backup, and security solutions
                  designed around the needs of our customers.
                </p>

                <p>
                  From electrical installations and repairs
                  to solar, inverter, and CCTV systems, our
                  goal is simple — to deliver quality
                  solutions that are safe, efficient, and
                  built to perform.
                </p>


                <div className="about-checks">

                  <div>
                    <FaCheckCircle />
                    <span>Professional workmanship</span>
                  </div>

                  <div>
                    <FaCheckCircle />
                    <span>Reliable power solutions</span>
                  </div>

                  <div>
                    <FaCheckCircle />
                    <span>Quality-focused service</span>
                  </div>

                </div>


                <div className="about-stats">

                  <div className="stat">
                    <strong>5+</strong>
                    <span>Core Services</span>
                  </div>

                  <div className="stat">
                    <strong>100%</strong>
                    <span>Commitment</span>
                  </div>

                  <div className="stat">
                    <strong>24/7</strong>
                    <span>Support Mindset</span>
                  </div>

                </div>


                <a
                  href="#contact"
                  className="primary-button about-button"
                >
                  Talk To Us
                  <FaArrowRight />
                </a>

              </div>

            </div>
          </div>
        </section>


        {/* =========================================
            WHY CHOOSE US
            ========================================= */}
        <section className="why-section">

          <div className="container">

            <div className="section-heading centered">

              <div className="section-label">
                <span></span>
                WHY CHOOSE US
                <span></span>
              </div>

              <h2>
                Built Around{" "}
                <span>Quality & Reliability</span>
              </h2>

              <p>
                We focus on delivering practical solutions,
                professional workmanship, and dependable
                service from the first enquiry to project
                completion.
              </p>

            </div>


            <div className="why-grid">

              <div className="why-card">
                <div className="why-number">01</div>

                <div className="why-icon">
                  <FaBolt />
                </div>

                <h3>Professional Work</h3>

                <p>
                  Every installation and repair is approached
                  with attention to detail, functionality,
                  and proper workmanship.
                </p>
              </div>


              <div className="why-card">
                <div className="why-number">02</div>

                <div className="why-icon">
                  <FaSolarPanel />
                </div>

                <h3>Smart Energy Solutions</h3>

                <p>
                  We provide solar and inverter solutions
                  designed to help customers achieve
                  dependable and efficient power.
                </p>
              </div>


              <div className="why-card">
                <div className="why-number">03</div>

                <div className="why-icon">
                  <FaVideo />
                </div>

                <h3>Security Focused</h3>

                <p>
                  Our CCTV solutions help customers improve
                  visibility, monitoring, and security around
                  their properties.
                </p>
              </div>


              <div className="why-card">
                <div className="why-number">04</div>

                <div className="why-icon">
                  <FaCheckCircle />
                </div>

                <h3>Customer First</h3>

                <p>
                  We listen to your needs and work toward
                  solutions that fit your property,
                  requirements, and budget.
                </p>
              </div>

            </div>
          </div>
        </section>


        {/* =========================================
            PROJECTS
            ========================================= */}
        <section
          className="projects-section"
          id="projects"
        >
          <div className="container">

            <div className="projects-top">

              <div className="section-heading">

                <div className="section-label">
                  <span></span>
                  OUR PROJECTS
                </div>

                <h2>
                  Solutions Built For{" "}
                  <span>Real Needs</span>
                </h2>

                <p>
                  From powering buildings to securing
                  properties, we provide practical solutions
                  designed around the needs of each customer.
                </p>

              </div>

              <a
                href="#contact"
                className="projects-button"
              >
                Start Your Project
                <FaArrowRight />
              </a>

            </div>


            <div className="projects-grid">

              {/* PROJECT 01 */}
              <article className="project-card project-large">

                <div className="project-visual">

                  <img
                    src="/images/residential_project_electrical_installation.jpg"
                    alt="Residential electrical installation project"
                    loading="lazy"
                  />

                  <div className="project-shade"></div>

                  <span className="project-tag">
                    01
                  </span>

                  <div className="project-overlay">

                    <span>
                      Electrical Installation
                    </span>

                    <h3>
                      Residential Electrical
                      Installation
                    </h3>

                  </div>

                </div>
              </article>


              {/* PROJECT 02 */}
              <article className="project-card">

                <div className="project-visual">

                  <img
                    src="/images/residential_commercial_project_solar_installation.jpg"
                    alt="Residential and commercial solar installation project"
                    loading="lazy"
                  />

                  <div className="project-shade"></div>

                  <span className="project-tag">
                    02
                  </span>

                  <div className="project-overlay">

                    <span>
                      Solar Installation
                    </span>

                    <h3>
                      Residential/Commercial
                      Solar Installation
                    </h3>

                  </div>

                </div>
              </article>


              {/* PROJECT 03 */}
              <article className="project-card">

                <div className="project-visual">

                  <img
                    src="/images/inverter_project_backup_installation.jpg"
                    alt="Inverter and backup power system project"
                    loading="lazy"
                  />

                  <div className="project-shade"></div>

                  <span className="project-tag">
                    03
                  </span>

                  <div className="project-overlay">

                    <span>
                      Backup Power
                    </span>

                    <h3>
                      Inverter & Backup
                      Power System
                    </h3>

                  </div>

                </div>
              </article>


              {/* PROJECT 04 */}
              <article className="project-card">

                <div className="project-visual">

                  <img
                    src="/images/electrical_repair_upgrade_project.jpg"
                    alt="Electrical repair and upgrade project"
                    loading="lazy"
                  />

                  <div className="project-shade"></div>

                  <span className="project-tag">
                    04
                  </span>

                  <div className="project-overlay">

                    <span>
                      Electrical Repairs
                    </span>

                    <h3>
                      Electrical Repair &
                      Upgrade Project
                    </h3>

                  </div>

                </div>
              </article>


              {/* PROJECT 05 */}
              <article className="project-card project-wide">

                <div className="project-visual">

                  <img
                    src="/images/cctv_project_security_installation.jpg"
                    alt="CCTV security installation project"
                    loading="lazy"
                  />

                  <div className="project-shade"></div>

                  <span className="project-tag">
                    05
                  </span>

                  <div className="project-overlay">

                    <span>
                      CCTV Security
                    </span>

                    <h3>
                      CCTV Security
                      Installation
                    </h3>

                  </div>

                </div>
              </article>

            </div>
          </div>
        </section>


        {/* =========================================
            CTA
            ========================================= */}
        <section className="cta-section">

          <div className="container">

            <div className="cta-box">

              <div className="cta-content">

                <div className="section-label">
                  <span></span>
                  LET'S WORK TOGETHER
                </div>

                <h2>
                  Need a Reliable
                  <br />
                  <span>Power Solution?</span>
                </h2>

                <p>
                  Tell us what you need. Our team is ready
                  to discuss your electrical, solar, inverter,
                  repair, or CCTV requirements.
                </p>

                <a
                  href="#contact"
                  className="primary-button"
                >
                  Send an Enquiry
                  <FaArrowRight />
                </a>

              </div>

              <div className="cta-decoration">
                <FaBolt />
              </div>

            </div>
          </div>
        </section>


        {/* =========================================
            CONTACT
            ========================================= */}
        <section
          className="contact-section"
          id="contact"
        >
          <div className="container">

            <div className="contact-grid">

              {/* CONTACT INFORMATION */}
              <div className="contact-info">

                <div className="section-label">
                  <span></span>
                  CONTACT US
                </div>

                <h2>
                  Let's Discuss
                  <br />
                  <span>Your Project.</span>
                </h2>

                <p className="contact-description">
                  Whether you need an electrical installation,
                  solar system, inverter, CCTV solution, or
                  electrical repair, send us your enquiry and
                  tell us what you need.
                </p>


                <div className="contact-features">

                  <div className="contact-feature">

                    <div className="contact-feature-icon">
                      <FaBolt />
                    </div>

                    <div className="contact-feature-content">
                      <h4>
                        Electrical Services
                      </h4>

                      <p>
                        Installation & repairs
                      </p>
                    </div>

                  </div>


                  <div className="contact-feature">

                    <div className="contact-feature-icon">
                      <FaSolarPanel />
                    </div>

                    <div className="contact-feature-content">
                      <h4>
                        Energy Solutions
                      </h4>

                      <p>
                        Solar & inverter systems
                      </p>
                    </div>

                  </div>


                  <div className="contact-feature">

                    <div className="contact-feature-icon">
                      <FaVideo />
                    </div>

                    <div className="contact-feature-content">
                      <h4>
                        Security Solutions
                      </h4>

                      <p>
                        CCTV sales & installation
                      </p>
                    </div>

                  </div>

                </div>


                {/* DIRECT CONTACT */}
                <div className="contact-direct">

                  <div className="contact-phone-icon">
                    <FaPhone />
                  </div>

                  <div>
                    <h4>
                      Need Immediate Assistance?
                    </h4>

                    <p>
                      Call or WhatsApp us today.
                    </p>

                    <a
                      href="tel:+2348012345678"
                    >
                      +234 801 234 5678
                    </a>
                  </div>

                </div>

              </div>


              {/* ENQUIRY FORM */}
              <div className="contact-form-wrapper">

                <div className="form-header">

                  <span>
                    REQUEST A QUOTE
                  </span>

                  <h3>
                    Send Us An Enquiry
                  </h3>

                  <p>
                    Fill in the form below and we'll
                    get back to you.
                  </p>

                </div>


                <form
                  onSubmit={handleSubmit}
                  className="contact-form"
                >

                  <div className="form-row">

                    <div className="form-group">

                      <label htmlFor="name">
                        Full Name
                        <span className="required">
                          *
                        </span>
                      </label>

                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        autoComplete="name"
                        required
                      />

                    </div>


                    <div className="form-group">

                      <label htmlFor="phone">
                        Phone Number
                        <span className="required">
                          *
                        </span>
                      </label>

                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Your phone number"
                        autoComplete="tel"
                        required
                      />

                    </div>

                  </div>


                  <div className="form-row">

                    <div className="form-group">

                      <label htmlFor="email">
                        Email Address
                        <span className="required">
                          *
                        </span>
                      </label>

                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="you@example.com"
                        autoComplete="email"
                        required
                      />

                    </div>


                    <div className="form-group">

                      <label htmlFor="service">
                        Service Required
                        <span className="required">
                          *
                        </span>
                      </label>

                      <select
                        id="service"
                        name="service"
                        defaultValue=""
                        required
                      >

                        <option
                          value=""
                          disabled
                        >
                          Select a service
                        </option>

                        <option value="Electrical Installation">
                          Electrical Installation
                        </option>

                        <option value="Solar Installation">
                          Solar Installation
                        </option>

                        <option value="Inverter Installation">
                          Inverter Installation
                        </option>

                        <option value="Electrical Repairs">
                          Electrical Repairs
                        </option>

                        <option value="CCTV Sales & Installation">
                          CCTV Sales & Installation
                        </option>

                        <option value="Other">
                          Other Enquiry
                        </option>

                      </select>

                    </div>

                  </div>


                  <div className="form-group">

                    <label htmlFor="location">
                      Project Location
                    </label>

                    <input
                      type="text"
                      id="location"
                      name="location"
                      placeholder="Where is the project located?"
                      autoComplete="street-address"
                    />

                  </div>


                  <div className="form-group">

                    <label htmlFor="message">
                      Your Enquiry
                      <span className="required">
                        *
                      </span>
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Tell us about the service you need..."
                      required
                    ></textarea>

                  </div>


                  <button
                    type="submit"
                    className="form-submit"
                    disabled={isSubmitting}
                  >

                    {isSubmitting ? (
                      <>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Enquiry
                        <FaArrowRight />
                      </>
                    )}

                  </button>


                  {formStatus && (
                    <div
                      className={
                        formStatus.includes(
                          "successfully"
                        )
                          ? "form-status success"
                          : "form-status error"
                      }
                      role="status"
                      aria-live="polite"
                    >
                      {formStatus.includes(
                        "successfully"
                      ) && <FaCheckCircle />}

                      <span>
                        {formStatus}
                      </span>
                    </div>
                  )}

                </form>

              </div>

            </div>
          </div>
        </section>

      </main>


      {/* =========================================
          FOOTER
          ========================================= */}
      <footer className="footer">

        <div className="container footer-grid">

          <div className="footer-brand">

            <a
              href="#home"
              className="logo"
            >
              <div className="logo-icon">
                <FaBolt />
              </div>

              <div className="logo-text">
                <span>CRYSTAL HEIGHT</span>
                <small>ENTERPRISE</small>
              </div>
            </a>

            <p>
              Reliable electrical, solar, inverter,
              repair, and CCTV solutions for homes
              and businesses.
            </p>

          </div>


          <div className="footer-links">

            <h4>Quick Links</h4>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>

          </div>


          <div className="footer-links">

            <h4>Our Services</h4>

            <a href="#services">
              Electrical Installation
            </a>

            <a href="#services">
              Solar Installation
            </a>

            <a href="#services">
              Inverter Installation
            </a>

            <a href="#services">
              Electrical Repairs
            </a>

            <a href="#services">
              CCTV Installation
            </a>

          </div>


          <div className="footer-contact">

            <h4>Contact Us</h4>

            <a href="tel:+2348012345678">
              <FaPhone />
              +234 801 234 5678
            </a>

            <a href="mailto:info@crystalheightenterprise.com">
              <FaEnvelope />
              crystalheightenterprise@gmail.com
            </a>

            <div>
              <FaMapMarkerAlt />
              <span>
                Nigeria
              </span>
            </div>

          </div>

        </div>


        <div className="footer-bottom">

          <div className="container">

            <p>
              © {new Date().getFullYear()} Crystal Height
              Enterprise. All rights reserved.
            </p>

            <a href="#home">
              Back to top ↑
            </a>

          </div>

        </div>

      </footer>


      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/2348030424116"
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Crystal Height Enterprise on WhatsApp"
      >
        <FaWhatsapp />
      </a>

    </div>
  );
}

export default App;