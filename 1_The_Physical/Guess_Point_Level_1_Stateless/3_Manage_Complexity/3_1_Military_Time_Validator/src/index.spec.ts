import MilitaryTimeValidator from './index'

describe('military time validator', () => {


	const militaryTimeValidator = new MilitaryTimeValidator();

	it('should tell "01:12 - 14:32" is valid military time  ',()=>{

		const time = "01:12 - 14:32";

		const response = militaryTimeValidator.isValidTime(time);

		expect(response).toBe(true)
	})
})
