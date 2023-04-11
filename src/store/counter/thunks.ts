import { AppThunk } from '../store';

export const getNumber =
  (min: number, max: number): AppThunk =>
  async (dispatch) => {
    const random = await fetch(
      'http://www.randomnumberapi.com/api/v1.0/random?' +
        new URLSearchParams({
          min: min.toString(),
          max: max.toString(),
        })
    ).then((res) => res.json());
    console.log(random);
  };
