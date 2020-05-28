const expect = require('chai').expect;
const formatFullName = require('../formatFullname');

describe('FormatFullName', () => {
  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullName(undefined)).to.equal('Error');
    expect(formatFullName(10)).to.equal('Error');
    expect(formatFullName({})).to.equal('Error');
    expect(formatFullName([])).to.equal('Error');
    expect(formatFullName(function () { })).to.equal('Error');
  });

  it('should return an error if "fullName" arg length is different than 2', () => {
    expect(formatFullName('Jon Doe test')).to.equal('Error');
    expect(formatFullName('Jon')).to.equal('Error');
  });

  it('should return good format of "fullName" if proper arg', () => {
    expect(formatFullName('John Doe')).to.equal('John Doe');
    expect(formatFullName('joHN dOe')).to.equal('John Doe');
  });
});