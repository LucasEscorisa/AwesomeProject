import {ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE} from '../actions/actionTypes'

const initialState = {
    places: [],
    selectedPlace: null
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_PLACE:
            return{
                ...state,
                places: state.places.concat({
                    key: Math.random().toString(), 
                    name: action.placeName,
                    image: {
                      uri: "https://www.avianca.com/content/dam/avianca/imagenes-contenido/PT/Imagenescontenidos/avianca-tours-y-walt-disney-world-resort/1img-planes.jpg"
                    }
                  })
            };
        case DELETE_PLACE:
            return{
                ...state,
                places: state.places.filter(place =>{
                    return place.key !== state.selectedPlace.key;
                  }),
                  selectedPlace: null
            };
        case SELECT_PLACE:
            return{
                ...state,
                selectedPlace: state.places.find(place => {
                    return place.key === action.placeKey;
                })
            };
        case DESELECT_PLACE:
            return{
                ...state,
                selectedPlace: null

            };
        default:
            return state;
    }
};

export default reducer;