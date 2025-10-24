'use strict';
console.log('Mapty OOP Foundation');

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    // store the coordinates as an array of latitude and longitude
    this.coords = coords;
    // store distance in kilometers
    this.distance = distance;
    // store duration in minutes
    this.duration = duration;
    this._getPosition();
    // Get data from local storage
    this._getLocalStorage();
  }

  _setDescription() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    // generate a description using workout type and current date
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}

const testWorkout = new Workout([40.7128, -74.006], 5.2, 24);
console.log('Test workout:', testWorkout);

class Running extends Workout {
  type = 'running';

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    // store the cadence (steps per minutes)
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }
  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }
  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

const run1 = new Running([39.7392, -104.9903], 5.2, 24, 178);
console.log('=== RUNNING WORKOUT ===');
console.log('Distance:', run1.distance, 'km');
console.log('Duration:', run1.duration, 'min');
console.log('Cadence:', run1.cadence, 'spm');
console.log('Pace:', run1.pace.toFixed(1), 'min/km');
console.log('Description:', run1.description);
console.log('ID:', run1.id);

const cycling1 = new Cycling([39.7392, -104.9903], 27, 95, 523);
console.log('=== CYCLING WORKOUT ===');
console.log('Distance:', cycling1.distance, 'km');
console.log('Duration:', cycling1.duration, 'min');
console.log('Elevation Gain:', cycling1.elevationGain, 'm');
console.log('Speed:', cycling1.speed.toFixed(1), 'km/h');
console.log('Description:', cycling1.description);
console.log('ID:', cycling1.id);

console.log('=== INHERITANCE TESTING ===');
console.log(
  'Both inherit from Workout:',
  run1 instanceof Workout,
  cycling1 instanceof Workout
);

//DOM Elements
//main form element
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');



class App {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];

  constructor() {
    // Get user's position
    this._getPosition();
    this.coords = coords;
    // store distance in kilometers
    this.distance = distance;
    // store duration in minutes
    this.duration = duration;
    this._getPosition();
    // Get data from local storage
    this._getLocalStorage();

    // Attach event handlers
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);

    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));

    document.addEeventListener('keydown', this._handleKeydown.bind(this));

  }

_handleKeydown () {
  if (e.key === 'Escape' && !form.classList.contains('hidden')) {
    this._hideForm();
    console.log('Form closed with Escape Key');
  }
}

_moveToPopup(e) {
  const workoutEl = e.target.closest('.workout');

  if (!workoutEl) return;

  const workout = this.#workouts.find(
    work => work.id === workoutEl.dataset.id
  );

  this.#map.setView(workout.coords, this.#mapZoomLevel, {
    animate: true,
    pan: {
      duration: 1,
    },
  });
  console.log('Navigated to $(workout.type)workout at', workout.coords);
}

  _getPosition() {
    if (navigator.geolocation) {
      console.log('🔍 Requesting user location...');
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        this._handleLocationError.bind(this),
        {
          timeout: 10000,
          enableHighAccuracy: true,
          maximumAge: 600000,
        }
      );
    } else {
      alert('❌ Geolocation is not supported by this browser');
      this._loadDefaultMap();
    }
  }

  _handleLocationError(error) {
    console.error('Geolocation error:', error);

    let message = 'Could not get your position. ';

    switch (error.code) {
      case error.PERMISSION_DENIED:
        message +=
          'Location access was denied. Please enable location services and refresh the page.';
        break;
      case error.POSITION_UNAVAILABLE:
        message += 'Location information is unavailable.';
        break;
      case error.TIMEOUT:
        message += 'Location request timed out.';
        break;
      default:
        message += 'An unknown error occurred.';
        break;
    }

    alert(`📍 ${message}`);
    this._loadDefaultMap();
  }


  _loadMap() {
    // extract coordinates from the geolocation position
    const { latitude, longitude } = position.coords;
    // test loading map
    console.log(`Loading map at coordinates: ${latitude}, ${longitude}`);

    // IMPORTANT PART
    // create coordinatee array for leaflet to understand
    const coords = [latitude, longitude];

    // initialize the map centered at user's location with a zoom level 13
    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    // add openstreetmap
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://{s}.tile.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // add a marker blue
    L.marker(coords).addTo(this.#map).bindPopup('You are here!').openPopup;

    //new the map event listener
    this.#map.on('click', this._showForm.bind(this));

    this._renderStoredWorkout();

    console.log('Map loaded successfully at user location');
  }

  _renderStoredWorkout () {
    this.#workouts.forEach(workout => {
      this._renderWorkoutMarker(workout);
      this._renderWorkout(workout);
    });

    if (this.#workouts.length > 0) {
      console.log('Rendered ${this.#workouts.length} stored workouts');
    }
  }
_

  _loadDefaultMap() {
    console.log('Loading default map location (Manila)');

    // put the actual coordinates
    const defaultCoords = [14.604, 120.994];

    // from const map
    // from 13 to this.#mapZoomLevel
    this.#map = L.map('map').setView(defaultCoords, this.#mapZoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));

    this._renderStoredWorkout();

    console.log('Default map loaded successfully');
  }

_showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }


  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _hideForm() {
    // Empty inputs
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';

    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  _newWorkout(e) {
  const validInputs = (...inputs) =>
    inputs.every(inp => Number.isFinite(inp));
  const allPositive = (...inputs) => inputs.every(inp => inp > 0);

  e.preventDefault();

  // Get data from form
  const type = inputType.value;
  const distance = +inputDistance.value;
  const duration = +inputDuration.value;
  const { lat, lng } = this.#mapEvent.latlng;
  let workout;

  // If workout running, create running object
  if (type === 'running') {
    const cadence = +inputCadence.value;

    // Check if data is valid
    if (
      !validInputs(distance, duration, cadence) ||
      !allPositive(distance, duration, cadence)
    )
      return alert('Inputs have to be positive numbers!');

    workout = new Running([lat, lng], distance, duration, cadence);
  }

  // If workout cycling, create cycling object
  if (type === 'cycling') {
    const elevation = +inputElevation.value;

    if (
      !validInputs(distance, duration, elevation) ||
      !allPositive(distance, duration)
    )
      return alert('Inputs have to be positive numbers!');

    workout = new Cycling([lat, lng], distance, duration, elevation);
  }

  // Add new object to workout array
  console.log('workout object created:', workout);

  this.#workouts.push(workout);

  console.log('Total workouts:', this.#workouts.length);
  console.log('All workouts:', this.#workouts);

  // Render workout on map as marker
  this._renderWorkoutMarker(workout);

  // Render workout on list
  this._renderWorkout(workout);

  this._setLocalStorage();

  // Hide form + clear input fields
  this._hideForm();

  console.log('Workout Creation Complete!');
}

_renderWorkout(workout) {
  let html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
      <h2 class="workout__title">${workout.description}</h2>
      <div class="workout__details">
        <span class="workout__icon">${
          workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
        }</span>
        <span class="workout__value">${workout.distance}</span>
        <span class="workout__unit">km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⏱</span>
        <span class="workout__value">${workout.duration}</span>
        <span class="workout__unit">min</span>
      </div>
  `;

  if (workout.type === 'running')
    html += `
      <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.pace.toFixed(1)}</span>
        <span class="workout__unit">min/km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">🦶🏼</span>
        <span class="workout__value">${workout.cadence}</span>
        <span class="workout__unit">spm</span>
      </div>
    </li>
    `;

  if (workout.type === 'cycling')
    html += `
      <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.speed.toFixed(1)}</span>
        <span class="workout__unit">km/h</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⛰</span>
        <span class="workout__value">${workout.elevationGain}</span>
        <span class="workout__unit">m</span>
      </div>
    </li>
    `;

  form.insertAdjacentHTML('afterend', html);
}

_renderWorkoutMarker(workout) {
  L.marker(workout.coords)
    .addTo(this.#map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: `${workout.type}-popup`,
      })
    )
    .setPopupContent(
      `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
    )
    .openPopup();
}


_setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  
  _getLocalStorage() {
  const data = localStorage.getItem('workouts');

  if (!data) return;

  console.log('Retrieved workouts from local Storage', storedWorkouts)

  this.#workouts = JSON.parse(data);

  // Restore object prototypes (fix lost methods)
  this.#workouts = this.#workouts.map(work => {
    if (work.type === 'running') {
      return new Running(work.coords, 
        work.distance, 
        work.duration, 
        work.cadence);
    }
    if (work.type === 'cycling') {
      return new Cycling(work.coords, 
        work.distance, 
        work.duration, 
        work.elevationGain);
    }
  });

  workout.data = new Date(workoutData.date);
  workout.id = workoutData.id;
  workout.clicks = workoutData.click;

  return workout;
};


  // NEW METHOD: Reset all data (useful for development/testing)
  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }
  

}

const app = new App();
console.log('Hour 2 complete!');

