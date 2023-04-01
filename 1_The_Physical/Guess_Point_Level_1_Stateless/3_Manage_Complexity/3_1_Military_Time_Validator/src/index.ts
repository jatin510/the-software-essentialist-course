export default class MilitaryTimeValidator {
	
	public isValidTime(time:string){
		const MAX_HOUR = 23;
		const MAX_MINUTE = 59;

		console.log(time.slice(3,5))
		
		return Number.parseInt(time.slice(0, 2)) <= MAX_HOUR && Number.parseInt(time.slice(3, 5)) <= MAX_MINUTE;
	}
}