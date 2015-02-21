Froala for AutoForm
=======================

Add WYSIWYG froala editor to your Meteor app.

###Usage###

1) Install `meteor add donchess:autoform-froala`

2) Create schema

```
var BookSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  content: {
    type: String,
    label: "Yet another poem",
    autoform: {
      afFieldInput: {
        type: 'froala'
        // froala options goes here
      }
    }
  }
});
```

3) Attach schema to your collection `Books.attachSchema(BookSchema)`

4) Generate the form with `{{> quickform}}` or `{{#autoform}}`

```
{{> quickForm collection="Books" type="insert"}}
```

###Warning###

At now, autoform-froala doesn't reactive, i.e. if other user delete or edit same object froala-field will not be refresh.

###Froala documentation###

See froala documentation [here](https://editor.froala.com/docs).
