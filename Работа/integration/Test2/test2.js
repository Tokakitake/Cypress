import * as jalingaWebEditor from "../pageObjects/jalingaWebEditor";
import * as MainTools from "../pageObjects/MainTools";
import * as TextToolBar from "../pageObjects/TextToolBar" ;
import { OBJECTS } from "../constants"

Given('Открыт лендинг интерактивной доски', () => {
    jalingaWebEditor.site.visit()
});

And('{string} test', () => {
    MainTools.create.file('#default.png')
    MainTools.objects.image().should('exist')
    MainTools.create.text()
    MainTools.objects.text().should('exist')
    //MainTools.dragObjectTo.top(OBJECTS.text)
});