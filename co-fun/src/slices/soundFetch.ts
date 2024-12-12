import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SoundTechnical {
  id?: string;
  title?: string;
  author?: string;
  user_email?: string;
  rhytmic_scale?: string;
  tempo_modulation?: string;
  beat_types?: string;
  tempo_range?: string;
  tempo_complexity?: string;
  spatial_context?: string;
  enclosed_settings?: string;
  open_air?: string;
  natural_environments?: string;
  date?: string;
  connection?: 'open' | 'close';
  source?: string;
  sound_source?: string;
}

export interface FetchSounds {
  data: SoundTechnical;
  endpoint: 'open' | 'technical';
}
const initialState: { sounds: SoundTechnical[], loading: boolean} = {
  sounds: [],
  loading: false
}

export const fetchSounds = createAsyncThunk('soundFetch/fetchSounds', async (req: FetchSounds) => {
  try {
  const { endpoint, data } = req;
  const response = await fetch(`http://localhost:3331/api/sounds/${endpoint}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  return response;
} catch (e) {
  console.log(e)
}
})

export const soundFetchSlice = createSlice({
  name: 'soundFetch',
  initialState,
  reducers: {
    addSound: (state, action: PayloadAction<SoundTechnical>) => {
      const { connection } = action.payload;
      const index = state.sounds.findIndex(sound => sound.connection === "open");
      if (index === -1 && connection !== "close") {
        state.sounds.push(action.payload);
      } else if (connection !== "close") {
        state.sounds[index] = {
          ...state.sounds[index],
          ...action.payload
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSounds.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(fetchSounds.fulfilled, (state, action) => {
      state.sounds = []
      state.loading = false
    })
    builder.addCase(fetchSounds.rejected, (state, action) => {
      console.log(action)
      state.sounds = []
      state.loading = false
    })
  },
})

export const selectSounds = (state: { sounds: { sounds: SoundTechnical[] }}) => state.sounds.sounds;

// Action creators are generated for each case reducer function
export const { addSound } = soundFetchSlice.actions

export default soundFetchSlice.reducer