({
	tableInit : function(component) {
		 component.set('v.columns', [
            {label: 'Name', fieldName: 'linkName', type: 'url',
             typeAttributes: {label: { fieldName: 'Name' },value:{fieldName: 'linkName'}, target: '_blank'}},
            {label: 'Says', fieldName: 'says__c', type: 'text'},
            {label: 'Eats', fieldName: 'eats__c', type: 'text'},
            {label: 'External Id', fieldName: 'externalId__c', type: 'text'}
            ]);
         
	},
    fetchAnimals: function(component, action) {
        action.setCallback(this, function(response){
            var similarProperties = response.getReturnValue();
            similarProperties.forEach(function(record){ 
                record.linkName = '/' + record.Id;
                console.log(record.linkName);
            });
            console.log(similarProperties);
            component.set("v.data", similarProperties);
         });
        $A.enqueueAction(action);
    }
})
