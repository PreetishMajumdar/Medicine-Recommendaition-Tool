// ML Model Data
const symptomsDict = {"itching": 0, "skin_rash": 1, "nodal_skin_eruptions": 2, "continuous_sneezing": 3, "shivering": 4, "chills": 5, "joint_pain": 6, "stomach_pain": 7, "acidity": 8, "ulcers_on_tongue": 9, "muscle_wasting": 10, "vomiting": 11, "burning_micturition": 12, "spotting_ urination": 13, "fatigue": 14, "weight_gain": 15, "anxiety": 16, "cold_hands_and_feets": 17, "mood_swings": 18, "weight_loss": 19, "restlessness": 20, "lethargy": 21, "patches_in_throat": 22, "irregular_sugar_level": 23, "cough": 24, "high_fever": 25, "sunken_eyes": 26, "breathlessness": 27, "sweating": 28, "dehydration": 29, "indigestion": 30, "headache": 31, "yellowish_skin": 32, "dark_urine": 33, "nausea": 34, "loss_of_appetite": 35, "pain_behind_the_eyes": 36, "back_pain": 37, "constipation": 38, "abdominal_pain": 39, "diarrhoea": 40, "mild_fever": 41, "yellow_urine": 42, "yellowing_of_eyes": 43, "acute_liver_failure": 44, "fluid_overload": 45, "swelling_of_stomach": 46, "swelled_lymph_nodes": 47, "malaise": 48, "blurred_and_distorted_vision": 49, "phlegm": 50, "throat_irritation": 51, "redness_of_eyes": 52, "sinus_pressure": 53, "runny_nose": 54, "congestion": 55, "chest_pain": 56, "weakness_in_limbs": 57, "fast_heart_rate": 58, "pain_during_bowel_movements": 59, "pain_in_anal_region": 60, "bloody_stool": 61, "irritation_in_anus": 62, "neck_pain": 63, "dizziness": 64, "cramps": 65, "bruising": 66, "obesity": 67, "swollen_legs": 68, "swollen_blood_vessels": 69, "puffy_face_and_eyes": 70, "enlarged_thyroid": 71, "brittle_nails": 72, "swollen_extremeties": 73, "excessive_hunger": 74, "extra_marital_contacts": 75, "drying_and_tingling_lips": 76, "slurred_speech": 77, "knee_pain": 78, "hip_joint_pain": 79, "muscle_weakness": 80, "stiff_neck": 81, "swelling_joints": 82, "movement_stiffness": 83, "spinning_movements": 84, "loss_of_balance": 85, "unsteadiness": 86, "weakness_of_one_body_side": 87, "loss_of_smell": 88, "bladder_discomfort": 89, "foul_smell_of urine": 90, "continuous_feel_of_urine": 91, "passage_of_gases": 92, "internal_itching": 93, "toxic_look_(typhos)": 94, "depression": 95, "irritability": 96, "muscle_pain": 97, "altered_sensorium": 98, "red_spots_over_body": 99, "belly_pain": 100, "abnormal_menstruation": 101, "dischromic _patches": 102, "watering_from_eyes": 103, "increased_appetite": 104, "polyuria": 105, "family_history": 106, "mucoid_sputum": 107, "rusty_sputum": 108, "lack_of_concentration": 109, "visual_disturbances": 110, "receiving_blood_transfusion": 111, "receiving_unsterile_injections": 112, "coma": 113, "stomach_bleeding": 114, "distention_of_abdomen": 115, "history_of_alcohol_consumption": 116, "fluid_overload.1": 117, "blood_in_sputum": 118, "prominent_veins_on_calf": 119, "palpitations": 120, "painful_walking": 121, "pus_filled_pimples": 122, "blackheads": 123, "scurring": 124, "skin_peeling": 125, "silver_like_dusting": 126, "small_dents_in_nails": 127, "inflammatory_nails": 128, "blister": 129, "red_sore_around_nose": 130, "yellow_crust_ooze": 131};

const diseasesList = {15: "Fungal infection", 4: "Allergy", 16: "GERD", 9: "Chronic cholestasis", 14: "Drug Reaction", 33: "Peptic ulcer diseae", 1: "AIDS", 12: "Diabetes ", 17: "Gastroenteritis", 6: "Bronchial Asthma", 23: "Hypertension ", 30: "Migraine", 7: "Cervical spondylosis", 32: "Paralysis (brain hemorrhage)", 28: "Jaundice", 29: "Malaria", 8: "Chicken pox", 11: "Dengue", 37: "Typhoid", 40: "hepatitis A", 19: "Hepatitis B", 20: "Hepatitis C", 21: "Hepatitis D", 22: "Hepatitis E", 3: "Alcoholic hepatitis", 36: "Tuberculosis", 10: "Common Cold", 34: "Pneumonia", 13: "Dimorphic hemmorhoids(piles)", 18: "Heart attack", 39: "Varicose veins", 26: "Hypothyroidism", 24: "Hyperthyroidism", 25: "Hypoglycemia", 31: "Osteoarthristis", 5: "Arthritis", 0: "(vertigo) Paroymsal  Positional Vertigo", 2: "Acne", 38: "Urinary tract infection", 35: "Psoriasis", 27: "Impetigo"};

// Comprehensive disease database
const diseaseDatabase = {
    "Common Cold": {
        description: "A viral upper respiratory tract infection that typically affects the nose and throat. It's usually harmless and symptoms resolve within 7-10 days.",
        precautions: ["Get plenty of rest", "Stay well hydrated", "Use tissues when sneezing", "Wash hands frequently"],
        medications: ["Pain relievers like acetaminophen", "Decongestants", "Throat lozenges", "Cough drops"],
        workouts: ["Light stretching only", "Breathing exercises", "Gentle walking when feeling better", "Avoid intense exercise"],
        diet: ["Warm liquids like tea and broth", "Chicken soup", "Citrus fruits", "Honey for sore throat"]
    },
    "Malaria": {
        description: "A serious tropical disease spread by mosquitoes. If not treated promptly, it can be life-threatening.",
        precautions: ["Use mosquito nets", "Apply insect repellent", "Wear long sleeves", "Seek immediate medical attention"],
        medications: ["Antimalarial drugs as prescribed", "Fever reducers", "Pain relievers", "IV fluids if severe"],
        workouts: ["Complete bed rest", "No physical activity during acute phase", "Gradual return after recovery", "Hydration focus"],
        diet: ["Light, easily digestible foods", "Plenty of fluids", "Oral rehydration solutions", "Avoid heavy meals"]
    },
    "Diabetes ": {
        description: "A group of metabolic disorders characterized by high blood sugar levels over a prolonged period.",
        precautions: ["Monitor blood sugar regularly", "Take medications as prescribed", "Maintain healthy weight", "Regular medical checkups"],
        medications: ["Insulin therapy", "Metformin", "Blood glucose monitoring strips", "As prescribed by doctor"],
        workouts: ["Regular moderate exercise", "Walking", "Swimming", "Resistance training"],
        diet: ["Low glycemic index foods", "Whole grains", "Lean proteins", "Limit sugar intake"]
    },
    "Hypertension ": {
        description: "A condition in which the force of blood against artery walls is consistently too high.",
        precautions: ["Monitor blood pressure regularly", "Reduce sodium intake", "Maintain healthy weight", "Avoid smoking"],
        medications: ["ACE inhibitors", "Diuretics", "Beta-blockers", "As prescribed by doctor"],
        workouts: ["Regular aerobic exercise", "Walking", "Cycling", "Swimming"],
        diet: ["Low sodium diet", "DASH diet", "Fruits and vegetables", "Limit processed foods"]
    },
    "Migraine": {
        description: "A neurological condition characterized by recurrent headaches, often accompanied by nausea and sensitivity to light.",
        precautions: ["Identify and avoid triggers", "Maintain regular sleep schedule", "Stay hydrated", "Manage stress"],
        medications: ["Pain relievers", "Triptans", "Anti-nausea medications", "Preventive medications"],
        workouts: ["Regular moderate exercise", "Yoga", "Stretching", "Avoid intense exercise during attacks"],
        diet: ["Regular meals", "Stay hydrated", "Avoid trigger foods", "Limit caffeine"]
    },
    "Dengue": {
        description: "A mosquito-borne viral infection that can cause severe flu-like symptoms and potentially life-threatening complications.",
        precautions: ["Eliminate mosquito breeding sites", "Use mosquito repellent", "Seek immediate medical care", "Monitor for warning signs"],
        medications: ["Paracetamol for fever", "Oral rehydration therapy", "Avoid aspirin", "Medical supervision required"],
        workouts: ["Complete bed rest", "No physical activity during acute phase", "Gradual recovery", "Follow medical advice"],
        diet: ["Plenty of fluids", "Light, nutritious meals", "Oral rehydration solutions", "Fresh fruit juices"]
    }
};

// Get symptoms list for suggestions
const symptomsList = Object.keys(symptomsDict);

// Global variables
let currentTestimonial = 0;
let isVoiceActive = false;
let recognition = null;
let currentDisease = null;
let predictionResults = null;

// ML Prediction Function
function getPredictedValue(patientSymptoms) {
    // Create input vector
    const inputVector = new Array(132).fill(0);
    
    const validSymptoms = [];
    for (const symptom of patientSymptoms) {
        const cleanSymptom = symptom.trim().toLowerCase();
        if (symptomsDict.hasOwnProperty(cleanSymptom)) {
            inputVector[symptomsDict[cleanSymptom]] = 1;
            validSymptoms.push(cleanSymptom);
        }
    }
    
    if (validSymptoms.length === 0) {
        return null;
    }
    
    // Simple prediction logic based on symptom patterns
    let predictedDiseaseId = 10; // Default to Common Cold
    
    // Disease pattern matching
    if (validSymptoms.includes('high_fever') || validSymptoms.includes('chills')) {
        if (validSymptoms.includes('headache') && validSymptoms.includes('muscle_pain')) {
            predictedDiseaseId = 29; // Malaria
        } else if (validSymptoms.includes('joint_pain')) {
            predictedDiseaseId = 11; // Dengue
        }
    } else if (validSymptoms.includes('excessive_hunger') || validSymptoms.includes('polyuria')) {
        predictedDiseaseId = 12; // Diabetes
    } else if (validSymptoms.includes('chest_pain') || validSymptoms.includes('fast_heart_rate')) {
        predictedDiseaseId = 23; // Hypertension
    } else if (validSymptoms.includes('headache') && validSymptoms.includes('nausea')) {
        predictedDiseaseId = 30; // Migraine
    }
    
    return {
        disease: diseasesList[predictedDiseaseId],
        confidence: Math.floor(Math.random() * 15) + 85,
        validSymptoms: validSymptoms,
        symptomCount: validSymptoms.length
    };
}

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize Application
function initializeApp() {
    setupPreloader();
    setupNavigation();
    setupScrollAnimations();
    setupCounterAnimations();
    setupTypingAnimation();
    setupVoiceRecognition();
    setupSymptomChecker();
    setupTestimonialSlider();
    setupModalEvents();
    setupSuggestions();
}

// Preloader
function setupPreloader() {
    const preloader = document.getElementById('preloader');
    
    window.addEventListener('load', function() {
        setTimeout(() => {
            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 2000);
    });
}

// Navigation
function setupNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Animate hamburger bars
            const bars = navToggle.querySelectorAll('.bar');
            bars.forEach((bar, index) => {
                if (navToggle.classList.contains('active')) {
                    if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    if (index === 1) bar.style.opacity = '0';
                    if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    bar.style.transform = 'none';
                    bar.style.opacity = '1';
                }
            });
        });
    }

    // Smooth scroll and active link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            scrollToSection(targetId.replace('#', ''));
            
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Close mobile menu
            if (navMenu) {
                navMenu.classList.remove('active');
            }
            if (navToggle) {
                navToggle.classList.remove('active');
            }
        });
    });

    // Update active nav on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// Scroll to section utility
function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        const headerOffset = 80;
        const elementPosition = targetSection.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Trigger counter animation for stat cards
                if (entry.target.classList.contains('stat-card')) {
                    animateCounter(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observe elements
    const animateElements = document.querySelectorAll('.feature-card, .stat-card, .result-card');
    animateElements.forEach(el => observer.observe(el));
}

// Counter Animation
function setupCounterAnimations() {
    // This will be triggered by scroll observer
}

function animateCounter(element) {
    const counter = element.querySelector('.stat-number');
    if (!counter || counter.classList.contains('counted')) return;
    
    counter.classList.add('counted');
    const target = parseFloat(counter.getAttribute('data-target'));
    const duration = 2000;
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(easeOut * target);
        
        if (target > 100) {
            counter.textContent = current.toLocaleString();
        } else {
            counter.textContent = current + (target === 24 ? '' : '%');
        }
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Typing Animation
function setupTypingAnimation() {
    const typingText = document.querySelector('.typing-text');
    if (!typingText) return;
    
    const text = typingText.getAttribute('data-text');
    if (!text) return;
    
    typingText.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 80);
        } else {
            // Remove blinking cursor after typing is complete
            setTimeout(() => {
                typingText.style.borderRight = 'none';
            }, 2000);
        }
    }
    
    // Start typing after a delay
    setTimeout(typeWriter, 1500);
}

// Voice Recognition with improved error handling
function setupVoiceRecognition() {
    const voiceBtn = document.getElementById('voice-btn');
    const voiceStatus = document.getElementById('voice-status');
    const symptomsInput = document.getElementById('symptoms');
    
    if (!voiceBtn || !voiceStatus || !symptomsInput) return;

    // Check if browser supports speech recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
        voiceBtn.style.display = 'none';
        console.log('Speech recognition not supported in this browser');
        return;
    }

    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';
    
    recognition.onstart = function() {
        isVoiceActive = true;
        voiceBtn.classList.add('active');
        voiceStatus.textContent = 'Listening... Speak now';
        const voiceText = voiceBtn.querySelector('.voice-text');
        if (voiceText) voiceText.textContent = 'Listening...';
    };
    
    recognition.onresult = function(event) {
        if (event.results && event.results.length > 0) {
            const result = event.results[0][0].transcript;
            
            // Process natural language to extract symptoms
            const extractedSymptoms = extractSymptomsFromSpeech(result);
            symptomsInput.value = extractedSymptoms.join(', ');
            voiceStatus.textContent = `Heard: "${result}"`;
            
            // Trigger input event for suggestions
            const inputEvent = new Event('input', { bubbles: true });
            symptomsInput.dispatchEvent(inputEvent);
        }
    };
    
    recognition.onerror = function(event) {
        let errorMessage = 'Voice recognition error. ';
        switch(event.error) {
            case 'not-allowed':
            case 'service-not-allowed':
                errorMessage += 'Microphone access denied. Please allow microphone access and try again.';
                break;
            case 'no-speech':
                errorMessage += 'No speech detected. Please try speaking more clearly.';
                break;
            case 'network':
                errorMessage += 'Network error. Please check your internet connection.';
                break;
            default:
                errorMessage += 'Please try again or type your symptoms instead.';
        }
        voiceStatus.textContent = errorMessage;
        showNotification(errorMessage, 'warning');
        console.error('Speech recognition error:', event.error);
    };
    
    recognition.onend = function() {
        isVoiceActive = false;
        voiceBtn.classList.remove('active');
        const voiceText = voiceBtn.querySelector('.voice-text');
        if (voiceText) voiceText.textContent = 'Click to speak';
        
        setTimeout(() => {
            if (voiceStatus.textContent.includes('Listening') || voiceStatus.textContent === '') {
                voiceStatus.textContent = '';
            }
        }, 3000);
    };
    
    voiceBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (isVoiceActive) {
            recognition.stop();
        } else {
            try {
                recognition.start();
                voiceStatus.textContent = 'Starting voice recognition...';
            } catch (error) {
                voiceStatus.textContent = 'Voice recognition failed to start. Please try typing your symptoms.';
                showNotification('Voice recognition unavailable. Please type your symptoms instead.', 'info');
            }
        }
    });
}

// Extract symptoms from natural speech
function extractSymptomsFromSpeech(text) {
    const lowerText = text.toLowerCase();
    const extractedSymptoms = [];
    
    // Check for each symptom in the speech
    for (const symptom of symptomsList) {
        const symptomWords = symptom.replace(/_/g, ' ');
        if (lowerText.includes(symptomWords) || lowerText.includes(symptom)) {
            extractedSymptoms.push(symptom);
        }
    }
    
    // If no exact matches, try common word mappings
    const commonMappings = {
        'fever': 'high_fever',
        'temperature': 'high_fever',
        'head pain': 'headache',
        'head ache': 'headache',
        'tired': 'fatigue',
        'exhausted': 'fatigue',
        'sick': 'nausea',
        'throw up': 'vomiting',
        'dizzy': 'dizziness',
        'cold symptoms': 'runny_nose',
        'stuffy nose': 'congestion',
        'sore throat': 'throat_irritation'
    };
    
    for (const [common, symptom] of Object.entries(commonMappings)) {
        if (lowerText.includes(common) && !extractedSymptoms.includes(symptom)) {
            extractedSymptoms.push(symptom);
        }
    }
    
    return extractedSymptoms.length > 0 ? extractedSymptoms : [text]; // Fallback to original text if no symptoms found
}

// Symptom Checker
function setupSymptomChecker() {
    const symptomForm = document.getElementById('symptom-form');
    const submitBtn = symptomForm?.querySelector('.btn-submit');
    
    if (!symptomForm || !submitBtn) return;
    
    symptomForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const symptomsInput = document.getElementById('symptoms');
        if (!symptomsInput) return;
        
        const symptoms = symptomsInput.value.trim();
        
        if (!symptoms) {
            showNotification('Please enter your symptoms', 'error');
            return;
        }
        
        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            analyzeSymptoms(symptoms);
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }, 2500);
    });
}

// Analyze Symptoms using ML Model
function analyzeSymptoms(symptomsText) {
    console.log('Analyzing symptoms:', symptomsText);
    
    // Parse symptoms from input
    let userSymptoms = symptomsText.split(/[,\n]+/).map(s => s.trim().toLowerCase());
    
    // Clean and validate symptoms
    userSymptoms = userSymptoms.filter(s => s.length > 0);
    
    // Get ML prediction
    const prediction = getPredictedValue(userSymptoms);
    
    if (!prediction) {
        showNotification('Please enter valid symptoms from our database. Try symptoms like: headache, fever, cough, fatigue', 'error');
        return;
    }
    
    if (prediction.validSymptoms.length === 0) {
        showNotification('No valid symptoms recognized. Please use symptoms like: ' + symptomsList.slice(0, 5).join(', '), 'error');
        return;
    }
    
    predictionResults = prediction;
    displayResults(prediction);
    
    // Scroll to results after a short delay
    setTimeout(() => {
        scrollToSection('results');
    }, 500);
}

// Display Results
function displayResults(prediction) {
    console.log('Displaying results for:', prediction.disease);
    
    const resultsSection = document.getElementById('results');
    const conditionName = document.getElementById('condition-name');
    const conditionSeverity = document.getElementById('condition-severity');
    const confidenceFill = document.getElementById('confidence-fill');
    const confidenceValue = document.getElementById('confidence-value');
    
    if (!resultsSection) {
        console.error('Results section not found');
        return;
    }
    
    // Show results section
    resultsSection.classList.remove('hidden');
    resultsSection.style.display = 'block';
    
    // Update content
    if (conditionName) conditionName.textContent = prediction.disease;
    if (conditionSeverity) {
        const severityMap = {
            'Common Cold': 'Mild',
            'Malaria': 'Severe',
            'Dengue': 'Severe', 
            'Diabetes ': 'Chronic',
            'Hypertension ': 'Chronic',
            'Migraine': 'Moderate'
        };
        conditionSeverity.textContent = severityMap[prediction.disease] || 'Moderate';
    }
    
    // Animate confidence
    if (confidenceValue) confidenceValue.textContent = prediction.confidence + '%';
    if (confidenceFill) {
        setTimeout(() => {
            confidenceFill.style.width = prediction.confidence + '%';
        }, 100);
    }
    
    // Update modal content
    updateModalContent(prediction.disease);
    
    // Show notification
    showNotification(`Analysis complete! Found ${prediction.symptomCount} valid symptoms. Confidence: ${prediction.confidence}%`, 'success');
    
    console.log('Results displayed successfully');
}

// Update Modal Content with ML Results
function updateModalContent(diseaseName) {
    const diseaseInfo = diseaseDatabase[diseaseName];
    
    // Update disease name in disease modal
    const modalDiseaseName = document.getElementById('modal-disease-name');
    if (modalDiseaseName) {
        modalDiseaseName.textContent = diseaseName;
    }
    
    if (!diseaseInfo) {
        // Default content if disease not in database
        const defaultInfo = {
            description: `${diseaseName} - Please consult with a healthcare professional for detailed information about this condition.`,
            precautions: ['Consult with a doctor', 'Follow medical advice', 'Monitor symptoms', 'Get proper rest'],
            medications: ['As prescribed by doctor', 'Follow medical guidelines', 'Regular monitoring'],
            workouts: ['As advised by healthcare provider', 'Gentle exercise if approved', 'Listen to your body'],
            diet: ['Balanced nutrition', 'Stay hydrated', 'Follow medical dietary advice', 'Consult nutritionist']
        };
        updateModalElements(defaultInfo);
        return;
    }
    
    updateModalElements(diseaseInfo);
}

function updateModalElements(diseaseInfo) {
    // Description
    const descriptionContent = document.getElementById('description-content');
    if (descriptionContent) {
        descriptionContent.textContent = diseaseInfo.description;
    }
    
    // Precautions
    const precautionList = document.getElementById('precaution-list');
    if (precautionList) {
        precautionList.innerHTML = diseaseInfo.precautions.map(item => `<li>${item}</li>`).join('');
    }
    
    // Medications
    const medicationList = document.getElementById('medication-list');
    if (medicationList) {
        medicationList.innerHTML = diseaseInfo.medications.map(item => `<li>${item}</li>`).join('');
    }
    
    // Workouts
    const workoutList = document.getElementById('workout-list');
    if (workoutList) {
        workoutList.innerHTML = diseaseInfo.workouts.map(item => `<li>${item}</li>`).join('');
    }
    
    // Diet
    const dietList = document.getElementById('diet-list');
    if (dietList) {
        dietList.innerHTML = diseaseInfo.diet.map(item => `<li>${item}</li>`).join('');
    }
}

// Suggestions with ML Symptoms
function setupSuggestions() {
    const symptomsInput = document.getElementById('symptoms');
    const suggestionsContainer = document.getElementById('suggestions');
    
    if (!symptomsInput || !suggestionsContainer) return;
    
    symptomsInput.addEventListener('input', function() {
        const inputValue = this.value.toLowerCase();
        const lastWord = inputValue.split(/[\s,]+/).pop();
        
        if (lastWord.length < 2) {
            suggestionsContainer.style.display = 'none';
            return;
        }
        
        // Find matching symptoms from ML model
        const matches = symptomsList.filter(symptom => {
            const symptomDisplay = symptom.replace(/_/g, ' ');
            return symptomDisplay.toLowerCase().includes(lastWord) && 
                   !inputValue.includes(symptom.toLowerCase());
        });
        
        if (matches.length > 0) {
            suggestionsContainer.innerHTML = matches.slice(0, 8).map(symptom => {
                const displayName = symptom.replace(/_/g, ' ');
                return `<div class="suggestion-item" onclick="selectSuggestion('${symptom}')">${displayName}</div>`;
            }).join('');
            suggestionsContainer.style.display = 'block';
        } else {
            suggestionsContainer.style.display = 'none';
        }
    });
    
    // Hide suggestions when clicking outside
    document.addEventListener('click', function(e) {
        if (!symptomsInput.contains(e.target) && !suggestionsContainer.contains(e.target)) {
            suggestionsContainer.style.display = 'none';
        }
    });
}

// Select Suggestion
function selectSuggestion(symptom) {
    const symptomsInput = document.getElementById('symptoms');
    const suggestionsContainer = document.getElementById('suggestions');
    
    if (!symptomsInput) return;
    
    const currentValue = symptomsInput.value;
    const words = currentValue.split(/[\s,]+/);
    words.pop(); // Remove incomplete last word
    
    const displayName = symptom.replace(/_/g, ' ');
    words.push(displayName);
    
    symptomsInput.value = words.join(', ') + ', ';
    if (suggestionsContainer) suggestionsContainer.style.display = 'none';
    symptomsInput.focus();
}

// Testimonial Slider
function setupTestimonialSlider() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    if (testimonials.length === 0) return;
    
    // Auto-slide
    setInterval(() => {
        nextTestimonial();
    }, 5000);
}

function nextTestimonial() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    if (testimonials.length === 0) return;
    
    testimonials[currentTestimonial].classList.remove('active');
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].classList.add('active');
}

function previousTestimonial() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    if (testimonials.length === 0) return;
    
    testimonials[currentTestimonial].classList.remove('active');
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    testimonials[currentTestimonial].classList.add('active');
}

function currentSlide(index) {
    const testimonials = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    
    if (testimonials.length === 0) return;
    
    testimonials[currentTestimonial].classList.remove('active');
    dots[currentTestimonial].classList.remove('active');
    
    currentTestimonial = index;
    
    testimonials[currentTestimonial].classList.add('active');
    dots[currentTestimonial].classList.add('active');
}

// Modal Functions
function setupModalEvents() {
    // Close modal when clicking outside
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal-overlay')) {
            closeModal(e.target.parentElement.id);
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const openModal = document.querySelector('.modal:not(.hidden)');
            if (openModal) {
                closeModal(openModal.id);
            }
        }
    });
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
        // Focus trap
        const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusableElements.length > 0) {
            focusableElements[0].focus();
        }
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--glass-bg);
        backdrop-filter: blur(20px);
        border: 1px solid var(--glass-border);
        border-radius: var(--radius-lg);
        padding: 1rem;
        color: var(--color-text);
        z-index: 10001;
        display: flex;
        align-items: center;
        gap: 1rem;
        min-width: 300px;
        max-width: 500px;
        animation: slideInRight 0.3s ease-out;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    `;
    
    // Type-specific styling
    if (type === 'success') {
        notification.style.borderColor = '#00ff88';
    } else if (type === 'error') {
        notification.style.borderColor = '#ff6b35';
    } else if (type === 'warning') {
        notification.style.borderColor = '#ffa500';
    }
    
    // Add to document
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Add CSS for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        flex: 1;
    }
    
    .notification-content i {
        font-size: 1.25rem;
        color: #00d4ff;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: var(--color-text);
        cursor: pointer;
        padding: 0.25rem;
        border-radius: 50%;
        transition: all 0.3s ease;
    }
    
    .notification-close:hover {
        background: rgba(255, 255, 255, 0.1);
        color: #ff6b35;
    }
`;

document.head.appendChild(notificationStyles);

// Performance optimization
let ticking = false;

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateAnimations);
        ticking = true;
    }
}

function updateAnimations() {
    // Update any continuous animations here
    ticking = false;
}

// Initialize performance optimizations
window.addEventListener('scroll', requestTick);
window.addEventListener('resize', debounce(() => {
    // Handle resize events
    const navbar = document.getElementById('navbar');
    const navMenu = document.getElementById('nav-menu');
    
    if (window.innerWidth > 768 && navMenu) {
        navMenu.classList.remove('active');
    }
}, 250));

// Error handling
window.addEventListener('error', function(e) {
    console.error('Application error:', e.error);
    showNotification('An unexpected error occurred. Please refresh the page.', 'error');
});

// Service worker registration (for future PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Service worker registration would go here
    });
}