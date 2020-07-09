public class MyComponentController {
    @AuraEnabled
    public static List<animal__c> getAnimalByExternalId(String externalId) {
        System.debug(externalId);
        List<animal__c> result = [SELECT Id, Name, says__c, eats__c, externalId__c 
                FROM animal__c 
                WHERE externalId__c = :externalId];
        System.debug(result.size());
        System.debug('hi from controller');
        if(result.size() == 0) {
            animal__c calloutAnimal = new animal__c();
            AnimalModel model = AnimalTriggerUtils.getModelById(externalId,new Http());
            System.debug(model == null);
            AnimalModel.mapNonNullFields(model.animal,calloutAnimal);
           result.add(calloutAnimal);             
        }
        return result;
    }
}
