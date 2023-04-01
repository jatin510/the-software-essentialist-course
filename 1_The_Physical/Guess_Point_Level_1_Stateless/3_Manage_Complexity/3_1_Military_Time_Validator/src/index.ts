export default class MilitaryTimeValidator {
	
	public isValidTime(time:string){
		const MAX_HOUR = 23;

		
		return Number.parseInt(time.slice(0,2)) <= MAX_HOUR;
	}
}