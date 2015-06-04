describe('Feature Parsing', function() {

    it('should parse and ignore background definitions for Features', function() {

        var feature = framework.parseFeature(__dirname + '/features/a.feature');

        feature.should.be.instanceof(Object);
        feature.type.should.be.exactly('FILE');

    });

});

